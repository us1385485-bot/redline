import mongoose from 'mongoose'

// In-memory fallback storage when MongoDB is not connected
const memoryStore = {
  products: [],
  contactMessages: [],
  customOrders: [],
}

let nextIds = {
  product: 1,
  contact: 1,
  order: 1,
}

export const isDbConnected = () => mongoose.connection.readyState === 1

export const memory = memoryStore
export const getNextId = (type) => nextIds[type]++

// Seed products into memory store on startup
export const seedMemoryProducts = () => {
  if (memory.products.length > 0) return

  const seedProducts = [
    {
      id: 1,
      name: 'REDLINE Pro-Zero',
      slug: 'redline-pro-zero',
      description: 'Tour-grade English Willow with premium grains and explosive middle.',
      category: 'Cricket Bat',
      willowType: 'English Willow',
      weight: '2.9 lbs',
      profile: 'Hybrid',
      edges: '40mm/36mm',
      grains: 12,
      handle: 'Semi-Oval',
      sweetSpot: 'Middle',
      price: 45000,
      currency: 'PKR',
      availability: 'In Stock',
      stockQuantity: 10,
      isFeatured: true,
      isActive: true,
      images: ['https://images.unsplash.com/photo-1628051245385-aa2521d3e27d?w=800&q=80'],
    },
    {
      id: 2,
      name: 'REDLINE Thunder',
      slug: 'redline-thunder',
      description: 'Our flagship. Maximum power with surgical precision.',
      category: 'Cricket Bat',
      willowType: 'English Willow',
      weight: '3.0 lbs',
      profile: 'Hybrid',
      edges: '44mm/40mm',
      grains: 15,
      handle: 'Oval',
      sweetSpot: 'Middle',
      price: 60000,
      currency: 'PKR',
      availability: 'Pre-Order',
      stockQuantity: 5,
      isFeatured: true,
      isActive: true,
      images: ['https://images.unsplash.com/photo-1618506412326-df59d6cc929b?w=800&q=80'],
    },
    {
      id: 3,
      name: 'REDLINE Blaze',
      slug: 'redline-blaze',
      description: 'Grade 1 Kashmir Willow with incredible value for money.',
      category: 'Cricket Bat',
      willowType: 'Kashmir Willow',
      weight: '2.8 lbs',
      profile: 'Bow Face',
      edges: '38mm/34mm',
      grains: 8,
      handle: 'Round',
      sweetSpot: 'Low-Middle',
      price: 18000,
      currency: 'PKR',
      availability: 'In Stock',
      stockQuantity: 15,
      isFeatured: false,
      isActive: true,
      images: ['https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80'],
    },
    {
      id: 4,
      name: 'REDLINE Raptor',
      slug: 'redline-raptor',
      description: 'Sleek curved blade engineered for wristy players.',
      category: 'Cricket Bat',
      willowType: 'English Willow',
      weight: '2.7 lbs',
      profile: 'Curved Blade',
      edges: '42mm/38mm',
      grains: 11,
      handle: 'Oval',
      sweetSpot: 'Middle',
      price: 52000,
      currency: 'PKR',
      availability: 'In Stock',
      stockQuantity: 8,
      isFeatured: true,
      isActive: true,
      images: ['https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80'],
    },
    {
      id: 5,
      name: 'REDLINE Striker X',
      slug: 'redline-striker-x',
      description: 'Flat face for powerful straight drives and punches.',
      category: 'Cricket Bat',
      willowType: 'English Willow',
      weight: '2.8 lbs',
      profile: 'Flat Face',
      edges: '40mm/36mm',
      grains: 10,
      handle: 'Semi-Oval',
      sweetSpot: 'Low',
      price: 48000,
      currency: 'PKR',
      availability: 'In Stock',
      stockQuantity: 12,
      isFeatured: false,
      isActive: true,
      images: ['https://images.sportskeeda.com/editor/2022/11/e20bc-16694777412193.jpg?w=800&q=80'],
    },
    {
      id: 6,
      name: 'REDLINE Storm Jr',
      slug: 'redline-storm-jr',
      description: 'Tour-grade willow in a lighter profile for young stars.',
      category: 'Cricket Bat',
      willowType: 'English Willow',
      weight: '2.6 lbs',
      profile: 'Hybrid',
      edges: '36mm/32mm',
      grains: 9,
      handle: 'Round',
      sweetSpot: 'Middle',
      price: 35000,
      currency: 'PKR',
      availability: 'In Stock',
      stockQuantity: 10,
      isFeatured: false,
      isActive: true,
      images: ['https://images.unsplash.com/photo-1628004196018-78c3c7ceef95?w=800&q=80'],
    },
    {
      id: 7,
      name: 'REDLINE Ace',
      slug: 'redline-ace',
      description: 'Reliable Kashmir Willow for club and school cricket.',
      category: 'Cricket Bat',
      willowType: 'Kashmir Willow',
      weight: '2.7 lbs',
      profile: 'Bow Face',
      edges: '36mm/32mm',
      grains: 6,
      handle: 'Semi-Oval',
      sweetSpot: 'Middle',
      price: 15000,
      currency: 'PKR',
      availability: 'In Stock',
      stockQuantity: 20,
      isFeatured: false,
      isActive: true,
      images: ['https://www.sdhsports.com/wp-content/uploads/2021/12/cricket-bat-1.jpg?w=800&q=80'],
    },
    {
      id: 8,
      name: 'REDLINE Phantom',
      slug: 'redline-phantom',
      description: 'Elite performance bat with exceptional pick-up.',
      category: 'Cricket Bat',
      willowType: 'English Willow',
      weight: '2.9 lbs',
      profile: 'Curved Blade',
      edges: '43mm/39mm',
      grains: 13,
      handle: 'Oval',
      sweetSpot: 'High-Middle',
      price: 55000,
      currency: 'PKR',
      availability: 'Pre-Order',
      stockQuantity: 6,
      isFeatured: true,
      isActive: true,
      images: ['https://www.sportsuncle.com/image/cache/catalog/images/cricket/cricket-bat-1-500x500.jpg?w=800&q=80'],
    },
  ]

  memory.products.push(...seedProducts)
  nextIds.product = seedProducts.length + 1
}

export class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.status = 400
  }
}

export const formatMongoError = (err) => {
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message)
    return { status: 400, message: errors[0] }
  }
  if (err.code === 11000) {
    return { status: 400, message: 'Duplicate value. This record already exists.' }
  }
  return { status: 500, message: err.message || 'Internal server error' }
}