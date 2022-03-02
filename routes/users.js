import express from 'express'
import auth from '../middleware/auth.js'
import {
  register,
  login,
  getUsers,
  getUserInfo,
  extend,
  addCart,
  getCart,
  updateCart,
  logout
} from '../controllers/users.js'

const router = express.Router()

router.post('/', register)
router.post('/login', login)
router.delete('/logout', auth, logout)
router.post('/extend', auth, extend)
router.get('/', auth, getUsers)
router.get('/me', auth, getUserInfo)
router.post('/me/cart', auth, addCart)
router.get('/me/cart', auth, getCart)
router.patch('/me/cart', auth, updateCart)

export default router
