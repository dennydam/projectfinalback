import board from '../models/board.js'

export const create4 = async (req, res) => {
  try {
    const result = await board.findByIdAndUpdate(req.params.id, {
      $push: {
        messages: {
          sender: req.user._id,
          text: req.body.text,
          account: req.body.account
        }
      }
    }, { new: true, runValidators: true })

    res.status(200).send({ success: true, message: '', result: result })
  } catch (error) {
    console.log(error)
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const create3 = async (req, res) => {
  try {
    const result = await board.create({ ...req.body })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ success: false, message: error.errors[key].message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const getProducts3 = async (req, res) => {
  try {
    const result = await board.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getAllProducts3 = async (req, res) => {
  try {
    const result = await board.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getProductById3 = async (req, res) => {
  try {
    const result = await board.findById(req.params.id)
    if (result) {
      res.status(200).send({ success: true, message: '', result })
    } else {
      res.status(404).send({ success: false, message: '找不到' })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const updateProductById3 = async (req, res) => {
  const data = {
    name: req.body.name,
    description: req.body.description

  }

  if (req.file) {
    data.image = req.file.path
  }
  try {
    const result = await board.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到' })
    } else if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ success: false, message: error.errors[key].message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const delProducts3 = async (req, res) => {
  try {
    const result = await board.findByIdAndDelete(req.params.id)
    if (result) {
      res.status(200).send({ success: true, message: '' })
    } else {
      res.status(404).send({ success: false, message: '查無帳號' })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '查無帳號' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}
