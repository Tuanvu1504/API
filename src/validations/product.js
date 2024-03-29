import Joi from 'joi'

export const productValidator = Joi.object({
  name: Joi.string().required().min(6).max(255),
  price: Joi.number().required().min(0),
  desc: Joi.string().required(),
  image: Joi.string().required(),
})
