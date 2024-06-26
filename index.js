import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usersRouter from './routes/users.js'
import productsRouter from './routes/products.js'
import products2Router from './routes/products2.js'
import boardRouter from './routes/board.js'

// mongoose.connect(process.env.DB_URL, () => {
//   console.log('MongoDB Connected')
// })

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
  })

const app = express()

app.use(
  cors({
    origin(origin, callback) {
      if (
        origin === undefined ||
        origin.includes('github') ||
        origin.includes('localhost') ||
        origin.includes('onrender')
      ) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed'), false)
      }
    },
  })
)

app.use((_, req, res, next) => {
  res.status(403).send({ success: false, message: '請求被拒絕' })
})

app.use(express.json())
app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '資料格式錯誤' })
})

app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/products2', products2Router)
app.use('/board', boardRouter)

app.all('*', (req, res) => {
  console.log('333')
  res.status(404).send({ success: false, message: '找不到' })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Started')
})
