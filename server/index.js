import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

// Import routes
import productRoutes from './routes/products.js'
import contactRoutes from './routes/contact.js'
import customOrderRoutes from './routes/customOrder.js'

// Import db helpers
import { seedMemoryProducts } from './utils/dbHelpers.js'

// Load env vars
dotenv.config()

const app = express()

// ==================== MIDDLEWARE ====================
app.use(helmet())
app.use(cors({
  origin: [process.env.CLIENT_URL || 'http://localhost:5173', 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests, please try again later.',
  },
})
app.use('/api/', limiter)

// ==================== ROUTES ====================
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'REDLINE SPORTS API is running',
    dbConnected: mongoose.connection.readyState === 1,
    timestamp: new Date().toISOString(),
  })
})

app.use('/api/products', productRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/custom-order', customOrderRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  })
})

// ==================== DATABASE CONNECTION ====================
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/redline_sports'

async function startServer() {
  // Always seed memory products so API works even without DB
  seedMemoryProducts()

  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Only wait 5s before giving up
    })
    console.log('✅ MongoDB connected successfully')
  } catch (error) {
    console.warn('⚠️  MongoDB not available - running with in-memory fallback storage')
    console.warn(`   Reason: ${error.message}`)
  }

  app.listen(PORT, () => {
    console.log('')
    console.log('════════════════════════════════════════════')
    console.log('   🏏  REDLINE SPORTS API  🏏')
    console.log('════════════════════════════════════════════')
    console.log(`   ➜  Server:   http://localhost:${PORT}`)
    console.log(`   ➜  Health:   http://localhost:${PORT}/api/health`)
    console.log(`   ➜  Products: http://localhost:${PORT}/api/products`)
    console.log(`   ➜  Contact:  POST http://localhost:${PORT}/api/contact`)
    console.log(`   ➜  Custom:   POST http://localhost:${PORT}/api/custom-order`)
    console.log(`   ➜  DB:       ${mongoose.connection.readyState === 1 ? 'MongoDB Connected' : 'In-Memory Mode (No MongoDB)'}`)
    console.log('════════════════════════════════════════════')
    console.log('')
  })
}

startServer()

export default app