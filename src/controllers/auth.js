import User from "../models/User"
import dotenv from 'dotenv'
import { signInValidatior, signUpValidatior } from "../validations/auth"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

dotenv.config()
const {SECRET_CODE} = process.env


export const signUp = async(req,res)=>{
  try {

    const {error} = signUpValidatior.validate(req.body, {abortEarly:false})
    if(error){
      const errors = error.details.map(err => err.message)
      return res.status(400).json({
        message: errors,
      })
    }
    const userExists = await User.findOne({
      email: req.body.email
    })
    if(userExists){
      return res.status(400).json({
        message: "Email da ton tai"
      })
    }

    const hashedPassword = await bcryptjs.hash(req.body.password, 10)
    const userAccount = await User.create({
      ...req.body,
      password: hashedPassword
    })

    if(!userAccount){
      throw new Error('failed')
    }

    userAccount.password = undefined

    return res.status(200).json({
      message: 'User created successfully',
      data: userAccount,
    })
    
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message
    })
  }
}

export const signIn = async(req,res)=>{
  try {

    const {error} = signInValidatior.validate(req.body, {abortEarly:false})
    if(error){
      const errors = error.details.map(err => err.message)
      return res.status(400).json({
        message: errors,
      })
    }
    const userExists = await User.findOne({
      email: req.body.email
    })
    if(!userExists){
      return res.status(400).json({
        message: "Email khong  ton tai trong he thong, ban co muon dang ky khong"
      })
    }

    const isMath = await bcryptjs.compare(req.body.password, userExists.password)
    

    if(!isMath){
      return res.status(400).json({
        message: "Password not match, please try again"
      })
    }
    const accessToken = jwt.sign({_id: userExists._id}, SECRET_CODE, {expiresIn: "1d"})

    userExists.password = undefined

    return res.status(200).json({
      message: 'User created successfully',
      data: userExists,
      accessToken,
    })
    
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message
    })
  }
}