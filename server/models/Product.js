import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    category: {
      type: String,
      enum: ['Cricket Bat', 'Batting Gloves', 'Pads', 'Helmet', 'Accessories'],
      default: 'Cricket Bat',
    },
    willowType: {
      type: String,
      enum: ['English Willow', 'Kashmir Willow'],
      required: [true, 'Willow type is required'],
    },
    weight: {
      type: String,
      required: [true, 'Weight is required'],
    },
    profile: {
      type: String,
      enum: ['Hybrid', 'Bow Face', 'Curved Blade', 'Flat Face'],
      required: [true, 'Profile is required'],
    },
    edges: {
      type: String,
      required: [true, 'Edge specifications are required'],
    },
    grains: {
      type: Number,
      required: [true, 'Grain count is required'],
      min: [0, 'Grain count cannot be negative'],
    },
    handle: {
      type: String,
      enum: ['Round', 'Oval', 'Semi-Oval', 'Round Semi-Oval'],
      required: [true, 'Handle type is required'],
    },
    sweetSpot: {
      type: String,
      enum: ['Low', 'Low-Middle', 'Middle', 'High-Middle', 'High'],
      required: [true, 'Sweet spot location is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    currency: {
      type: String,
      default: 'PKR',
    },
    availability: {
      type: String,
      enum: ['In Stock', 'Pre-Order', 'Out of Stock', 'Discontinued'],
      default: 'In Stock',
    },
    stockQuantity: {
      type: Number,
      default: 0,
      min: [0, 'Stock cannot be negative'],
    },
    images: {
      type: [String],
      default: [],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      },
    },
  }
)

// Generate slug before save
ProductSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }
  next()
})

export default mongoose.model('Product', ProductSchema)