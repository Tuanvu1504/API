import Product from "../models/Product"
import { productValidator } from "../validations/product"

export const create = async(req, res) =>{
  try {

    const {error} = productValidator.validate(req.body, {abortEarly: false});

    if(error){
      const errors = error.details.map(err => err.message)
      return res.status(400).json({
        message: errors
      })
    }

    const data = await Product.create(req.body)
    if(!data){
      throw new Error('Failed to create Product')
    }

    return res.status(200).json({
      message: "Successfully",
      data,
    })
    
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message
    })
  }
}
export const getAll = async(req, res) =>{
  try {

    const data = await Product.find()
    if(!data || data.length === 0){
      throw new Error('Failed to get all Product')
    }

    return res.status(200).json({
      message: "Successfully ",
      data,
    })
    
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message
    })
  }
}
export const getDetail = async(req, res) =>{
  try {

    const data = await Product.findById(req.params.id)
    if(!data){
      throw new Error('Failed to getDetail Product')
    }

    return res.status(200).json({
      message: "Successfully ",
      data,
    })
    
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message
    })
  }
}
export const update = async(req, res) =>{
  try {

    const {error} = productValidator.validate(req.body, {abortEarly: false});

    if(error){
      const errors = error.details.map(err => err.message)
      return res.status(400).json({
        message: errors
      })
    }

    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!data){
      throw new Error('Failed to update Product')
    }

    return res.status(200).json({
      message: "Successfully ",
      data,
    })
    
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message
    })
  }
}
export const remove = async(req, res) =>{
  try {

    const data = await Product.findByIdAndDelete(req.params.id)
    if(!data){
      throw new Error('Failed to delete Product')
    }

    return res.status(200).json({
      message: "Successfully",
      data,
    })
    
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message
    })
  }
}