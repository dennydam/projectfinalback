import mongoose from 'mongoose'

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '商品名不能為空']
  },
  description: {
    type: String
  },
  messages: {
    type: [
      {
        sender: {
          type: mongoose.ObjectId,
          ref: 'users',
          required: true
        },
        account: {
          type: String,
          required: true
        },
        text: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ]
  }
}, { versionKey: false })

export default mongoose.model('board', boardSchema)
