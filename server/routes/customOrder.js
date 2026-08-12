import express from 'express'
import CustomOrder from '../models/CustomOrder.js'
import { isDbConnected, memory, getNextId } from '../utils/dbHelpers.js'

const router = express.Router()

/**
 * @route   POST /api/custom-order
 * @desc    Submit a custom bat order request
 * @access  Public
 */
router.post('/', async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      batType,
      weight,
      profile,
      handle,
      gripColor,
      specialRequests,
    } = req.body

    // Validate
    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name must be at least 2 characters',
      })
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      })
    }
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Phone number is required',
      })
    }

    if (isDbConnected()) {
      // Create the custom order in MongoDB
      const customOrder = await CustomOrder.create({
        name,
        email,
        phone,
        batType,
        weight,
        profile,
        handle,
        gripColor: gripColor || 'Blue',
        specialRequests: specialRequests || '',
      })

      return res.status(201).json({
        success: true,
        message: 'Custom bat order submitted successfully! Our team will contact you within 24 hours.',
        data: customOrder,
      })
    }

    // ==== In-Memory Fallback (No MongoDB) ====
    const id = getNextId('order')
    const newOrder = {
      id,
      name,
      email,
      phone,
      batType,
      weight,
      profile,
      handle,
      gripColor: gripColor || 'Blue',
      specialRequests: specialRequests || '',
      status: 'Pending',
      estimatedPrice: 0,
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    memory.customOrders.push(newOrder)

    res.status(201).json({
      success: true,
      message: 'Custom bat order submitted successfully! Our team will contact you within 24 hours.',
      data: newOrder,
    })
  } catch (err) {
    next(err)
  }
})

/**
 * @route   GET /api/custom-order
 * @desc    Get all custom orders (Admin)
 * @access  Private
 */
router.get('/', async (req, res, next) => {
  try {
    const apiKey = req.header('x-api-key')
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      })
    }

    const { status = 'Pending', page = 1, limit = 20 } = req.query

    if (isDbConnected()) {
      const query = {}
      if (status && status !== 'All') query.status = status

      const pageNum = Math.max(parseInt(page) || 1, 1)
      const limitNum = Math.min(Math.max(parseInt(limit) || 20, 1), 100)
      const skip = (pageNum - 1) * limitNum

      const [orders, total] = await Promise.all([
        CustomOrder.find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limitNum),
        CustomOrder.countDocuments(query),
      ])

      return res.json({
        success: true,
        count: orders.length,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum),
        data: orders,
      })
    }

    // In-memory fallback
    let filtered = [...memory.customOrders]
    if (status && status !== 'All') {
      filtered = filtered.filter(o => o.status === status)
    }
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

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
 * @route   GET /api/custom-order/:id
 * @desc    Get a single custom order (Admin)
 * @access  Private
 */
router.get('/:id', async (req, res, next) => {
  try {
    const apiKey = req.header('x-api-key')
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      })
    }

    if (isDbConnected()) {
      const order = await CustomOrder.findById(req.params.id)
      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
        })
      }

      return res.json({
        success: true,
        data: order,
      })
    }

    // In-memory fallback
    const id = Number(req.params.id) || req.params.id
    const order = memory.customOrders.find(o => o.id === id)
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      })
    }

    res.json({
      success: true,
      data: order,
    })
  } catch (err) {
    next(err)
  }
})

/**
 * @route   PATCH /api/custom-order/:id
 * @desc    Update custom order status (Admin)
 * @access  Private
 */
router.patch('/:id', async (req, res, next) => {
  try {
    const apiKey = req.header('x-api-key')
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      })
    }

    const { status, estimatedPrice, notes } = req.body
    const updateData = {}
    if (status) updateData.status = status
    if (estimatedPrice !== undefined) updateData.estimatedPrice = estimatedPrice
    if (notes) updateData.notes = notes

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No update fields provided',
      })
    }

    if (isDbConnected()) {
      const order = await CustomOrder.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      )

      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
        })
      }

      return res.json({
        success: true,
        data: order,
      })
    }

    // In-memory fallback
    const id = Number(req.params.id) || req.params.id
    const index = memory.customOrders.findIndex(o => o.id === id)
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      })
    }

    memory.customOrders[index] = {
      ...memory.customOrders[index],
      ...updateData,
      updatedAt: new Date().toISOString(),
    }

    res.json({
      success: true,
      data: memory.customOrders[index],
    })
  } catch (err) {
    next(err)
  }
})

export default router