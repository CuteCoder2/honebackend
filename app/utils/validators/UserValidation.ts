import joi from "joi"

export const registerUserValidation = joi.object({
    first_name: joi.string().max(30).required().min(2),
    last_name: joi.string().max(30).required().min(2),
    email : joi.string().email().required(),
    password : joi.string().min(8).required().min(8),
    username : joi.string().required().min(5),
    phone : joi.string().required().min(10),
    dob : joi.date().required().min((new Date().getFullYear() - 15).toString()),  
    pob: joi.string().required().min(2), 
    store: joi.string().required().min(2) 
})

export const loginUserValidation = joi.object({
    username : joi.string().required(),
    password : joi.string().min(8).required(),
})