import Joi from 'joi';

export const signUpValidatior = Joi.object({
  userName: Joi.string().required().min(6).max(255),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(255),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")),
  role: Joi.string(),
})
export const signInValidatior = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(255)
})