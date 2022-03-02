import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import {
  create2,
  getProducts2,
  getAllProducts2,
  getProductById2,
  updateProductById2,
  delProducts2
} from '../controllers/products2.js'

const router = express.Router()

router.post('/', auth, admin, content('multipart/form-data'), upload, create2)
router.get('/', getProducts2)
router.get('/all', auth, admin, getAllProducts2)
router.get('/:id', getProductById2)
router.patch('/:id', auth, admin, content('multipart/form-data'), upload, updateProductById2)
router.delete('/:id', auth, admin, upload, delProducts2)
export default router
