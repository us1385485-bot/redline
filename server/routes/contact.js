import express from 'express'
import ContactMessage from '../models/ContactMessage.js'
import { isDbConnected, memory, getNextId } from '../utils/dbHelpers.js'

const router = express.Router()

/**
 * @route   POST /api/contact
 * @desc    Submit a contact form message
 * @access  Public
 */
router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone, inquiryType, message } = req.body

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
    if (!message || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters',
      })
    }

    if (isDbConnected()) {
      // Create the contact message
      const contactMessage = await ContactMessage.create({
        name,
        email,
        phone: phone || '',
        inquiryType: inquiryType || 'General Inquiry',
        message,
      })

      return res.status(201).json({
        success: true,
        message: 'Message sent successfully! We will get back to you within 24 hours.',
        data: contactMessage,
      })
    }

    // ==== In-Memory Fallback (No MongoDB) ====
    const id = getNextId('contact')
    const newMessage = {
      id,
      name,
      email,
      phone: phone || '',
      inquiryType: inquiryType || 'General Inquiry',
      message,
      status: 'New',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    memory.contactMessages.push(newMessage)

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you within 24 hours.',
      data: newMessage,
    })
  } catch (err) {
    next(err)
  }
})

/**
 * @route   GET /api/contact
 * @desc    Get all contact messages (Admin)
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

    const { status = 'New', page = 1, limit = 20 } = req.query

    if (isDbConnected()) {
      const query = {}
      if (status && status !== 'All') query.status = status

      const pageNum = Math.max(parseInt(page) || 1, 1)
      const limitNum = Math.min(Math.max(parseInt(limit) || 20, 1), 100)
      const skip = (pageNum - 1) * limitNum

      const [messages, total] = await Promise.all([
        ContactMessage.find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limitNum),
        ContactMessage.countDocuments(query),
      ])

      return res.json({
        success: true,
        count: messages.length,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum),
        data: messages,
      })
    }

    // In-memory fallback
    let filtered = [...memory.contactMessages]
    if (status && status !== 'All') {
      filtered = filtered.filter(m => m.status === status)
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
 * @route   GET /api/contact/:id
 * @desc    Get a single contact message (Admin)
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
      const message = await ContactMessage.findById(req.params.id)
      if (!message) {
        return res.status(404).json({
          success: false,
          message: 'Message not found',
        })
      }

      return res.json({
        success: true,
        data: message,
      })
    }

    // In-memory fallback
    const id = Number(req.params.id) || req.params.id
    const message = memory.contactMessages.find(m => m.id === id)
    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found',
      })
    }

    res.json({
      success: true,
      data: message,
    })
  } catch (err) {
    next(err)
  }
})

/**
 * @route   PATCH /api/contact/:id
 * @desc    Update message status (Admin)
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

    const { status } = req.body
    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status is required',
      })
    }

    if (isDbConnected()) {
      const message = await ContactMessage.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true, runValidators: true }
      )

      if (!message) {
        return res.status(404).json({
          success: false,
          message: 'Message not found',
        })
      }

      return res.json({
        success: true,
        data: message,
      })
    }

    // In-memory fallback
    const id = Number(req.params.id) || req.params.id
    const index = memory.contactMessages.findIndex(m => m.id === id)
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Message not found',
      })
    }

    memory.contactMessages[index] = {
      ...memory.contactMessages[index],
      status,
      updatedAt: new Date().toISOString(),
    }

    res.json({
      success: true,
      data: memory.contactMessages[index],
    })
  } catch (err) {
    next(err)
  }
})

export default router