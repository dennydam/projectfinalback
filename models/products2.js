import mongoose from 'mongoose'

const productSchema2 = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '商品名不能為空']
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  sell: {
    type: Boolean,
    default: false
  },
  video: {
    type: String
  }
}, { versionKey: false })

export default mongoose.model('products2', productSchema2)
