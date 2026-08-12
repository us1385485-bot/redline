import express from 'express'
import Product from '../models/Product.js'
import { isDbConnected, memory, seedMemoryProducts, getNextId } from '../utils/dbHelpers.js'

const router = express.Router()

// Ensure memory products are seeded on module load
seedMemoryProducts()

/**
 * @route   GET /api/products
 * @desc    Get all products with filtering, sorting, and pagination
 * @access  Public
 */
router.get('/', async (req, res, next) => {
  try {
    const {
      willowType,
      weight,
      profile,
      minPrice,
      maxPrice,
      search,
      featured,
      sort = 'createdAt',
      order = 'desc',
      page = 1,
      limit = 20,
    } = req.query

    // If MongoDB is connected, use the DB
    if (isDbConnected()) {
      // Build filter query
      const query = { isActive: true }

      if (willowType && willowType !== 'All') {
        query.willowType = willowType
      }
      if (weight && weight !== 'All') {
        query.weight = weight
      }
      if (profile && profile !== 'All') {
        query.profile = profile
      }
      if (minPrice || maxPrice) {
        query.price = {}
        if (minPrice) query.price.$gte = Number(minPrice)
        if (maxPrice) query.price.$lte = Number(maxPrice)
      }
      if (search) {
        query.name = { $regex: search, $options: 'i' }
      }
      if (featured === 'true') {
        query.isFeatured = true
      }

      // Pagination
      const pageNum = Math.max(parseInt(page) || 1, 1)
      const limitNum = Math.min(Math.max(parseInt(limit) || 20, 1), 100)
      const skip = (pageNum - 1) * limitNum

      // Sort
      const sortOrder = order === 'asc' ? 1 : -1
      const sortObj = {}
      const validSortFields = ['price', 'name', 'createdAt', 'grains', 'weight']
      const sortField = validSortFields.includes(sort) ? sort : 'createdAt'
      sortObj[sortField] = sortOrder

      // Execute query
      const [products, total] = await Promise.all([
        Product.find(query).sort(sortObj).skip(skip).limit(limitNum),
        Product.countDocuments(query),
      ])

      return res.json({
        success: true,
        count: products.length,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum),
        data: products,
      })
    }

    // ==== In-Memory Fallback (No MongoDB) ====
    let filtered = memory.products.filter(p => p.isActive)

    if (willowType && willowType !== 'All') {
      filtered = filtered.filter(p => p.willowType === willowType)
    }
    if (weight && weight !== 'All') {
      filtered = filtered.filter(p => p.weight === weight)
    }
    if (profile && profile !== 'All') {
      filtered = filtered.filter(p => p.profile === profile)
    }
    if (minPrice || maxPrice) {
      filtered = filtered.filter(p => {
        if (minPrice && p.price < Number(minPrice)) return false
        if (maxPrice && p.price > Number(maxPrice)) return false
        return true
      })
    }
    if (search) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (featured === 'true') {
      filtered = filtered.filter(p => p.isFeatured)
    }

    // Sort
    const sortOrder = order === 'asc' ? 1 : -1
    const validSortFields = ['price', 'name', 'createdAt', 'grains', 'weight']
    const sortField = validSortFields.includes(sort) ? sort : 'createdAt'
    filtered.sort((a, b) => {
      const aVal = a[sortField]
      const bVal = b[sortField]
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal) * sortOrder
      }
      return (aVal - bVal) * sortOrder
    })

    // Paginate
    const pageNum = Math.max(parseInt(page) || 1, 1)
    const limitNum = Math.min(Math.max(parseInt(limit) || 20, 1), 100)
    const skip = (pageNum - 1) * limitNum
    const paginated = filtered.slice(skip, skip + limitNum)

    res.json({
      success: true,
      count: paginated.length,
      total: filtered.length,
      page: pageNum,
      totalPages: Math.ceil(filtered.length / limitNum),
      data: paginated,
    })
  } catch (err) {
    next(err)
  }
})

/**
 * @route   GET /api/products/slug/:slug
 * @desc    Get single product by slug
 * @access  Public
 */
router.get('/slug/:slug', async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const product = await Product.findOne({ slug: req.params.slug, isActive: true })

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        })
      }

      return res.json({
        success: true,
        data: product,
      })
    }

    // In-memory fallback
    const product = memory.products.find(p => p.slug === req.params.slug && p.isActive)
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }

    res.json({
      success: true,
      data: product,
    })
  } catch (err) {
    next(err)
  }
})

/**
 * @route   GET /api/products/:id
 * @desc    Get single product by ID
 * @access  Public
 */
router.get('/:id', async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const product = await Product.findById(req.params.id)

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        })
      }

      return res.json({
        success: true,
        data: product,
      })
    }

    // In-memory fallback
    const product = memory.products.find(p => p.id === Number(req.params.id) || p.id === req.params.id)
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }

    res.json({
      success: true,
      data: product,
    })
  } catch (err) {
    next(err)
  }
})

// ==================== ADMIN ROUTES (Simple protection via API key) ====================

const verifyAdmin = (req, res, next) => {
  const apiKey = req.header('x-api-key')
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    })
  }
  next()
}

/**
 * @route   POST /api/products
 * @desc    Create a new product (Admin)
 * @access  Private
 */
router.post('/', verifyAdmin, async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const product = await Product.create(req.body)
      return res.status(201).json({
        success: true,
        data: product,
      })
    }

    // In-memory fallback
    const id = getNextId('product')
    const newProduct = {
      ...req.body,
      id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    if (!newProduct.slug) {
      newProduct.slug = newProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }
    memory.products.push(newProduct)

    res.status(201).json({
      success: true,
      data: newProduct,
    })
  } catch (err) {
    next(err)
  }
})

/**
 * @route   PUT /api/products/:id
 * @desc    Update a product (Admin)
 * @access  Private
 */
router.put('/:id', verifyAdmin, async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      )

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        })
      }

      return res.json({
        success: true,
        data: product,
      })
    }

    // In-memory fallback
    const id = Number(req.params.id) || req.params.id
    const index = memory.products.findIndex(p => p.id === id)
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }

    memory.products[index] = {
      ...memory.products[index],
      ...req.body,
      id: memory.products[index].id,
      updatedAt: new Date().toISOString(),
    }

    res.json({
      success: true,
      data: memory.products[index],
    })
  } catch (err) {
    next(err)
  }
})

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product (Admin)
 * @access  Private
 */
router.delete('/:id', verifyAdmin, async (req, res, next) => {
  try {
    if (isDbConnected()) {
      const product = await Product.findByIdAndDelete(req.params.id)

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        })
      }

      return res.json({
        success: true,
        message: 'Product deleted successfully',
      })
    }

    // In-memory fallback
    const id = Number(req.params.id) || req.params.id
    const index = memory.products.findIndex(p => p.id === id)
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }

    memory.products.splice(index, 1)

    res.json({
      success: true,
      message: 'Product deleted successfully',
    })
  } catch (err) {
    next(err)
  }
})

export default router