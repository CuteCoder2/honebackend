import joi from "joi"

export const registerUserValidation = joi.object({
    name: joi.string().max(30).required(),
    email : joi.string().email().required(),
    password : joi.string().min(8).required(),
})

export const loginUserValidation = joi.object({
    username : joi.string().email().required(),
    password : joi.string().min(8).required(),
})

export default {registerUserValidation}