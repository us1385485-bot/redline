import mongoose from 'mongoose'

const CustomOrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    batType: {
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
    handle: {
      type: String,
      enum: ['Semi-Oval', 'Oval', 'Round'],
      required: [true, 'Handle type is required'],
    },
    gripColor: {
      type: String,
      default: 'Blue',
    },
    specialRequests: {
      type: String,
      trim: true,
      maxlength: [2000, 'Special requests cannot exceed 2000 characters'],
      default: '',
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    estimatedPrice: {
      type: Number,
      default: 0,
    },
    notes: {
      type: String,
      default: '',
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

export default mongoose.model('CustomOrder', CustomOrderSchema)