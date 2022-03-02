import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'
import {
  create3,
  create4,
  getProducts3,
  getAllProducts3,
  getProductById3,
  updateProductById3,
  delProducts3
} from '../controllers/board.js'

const router = express.Router()

router.post('/', auth, content('multipart/form-data'), upload, create3)
router.post('/:id', auth, create4)

router.get('/', getProducts3)
router.get('/all', auth, getAllProducts3)
router.get('/:id', getProductById3)
router.patch('/:id', auth, content('multipart/form-data'), upload, updateProductById3)
router.delete('/:id', auth, upload, delProducts3)
export default router
