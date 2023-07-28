import joi from "joi"

export const registerUserValidation = joi.object({
    first_name: joi.string().max(30).required(),
    last_name: joi.string().max(30).required(),
    email : joi.string().email().required(),
    password : joi.string().min(8).required(),
    username : joi.string().required(),
    phone : joi.string().required(),
    dob : joi.date().required(),  
    pob: joi.string().required() 
})

export const loginUserValidation = joi.object({
    username : joi.string().required(),
    password : joi.string().min(8).required(),
})