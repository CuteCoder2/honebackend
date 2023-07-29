import joi from "joi";

export const NewProductValidation = joi.object({
    name: joi.string().required(),
    cost: joi.number().min(0).required(),
    selling: joi.number().min(0).required(),
    brand: joi.string().required(),
    image: joi.string().required(),
    images: joi.array().required(),
    category: joi.array().required(),
    stock:joi.number().required(),
    colors:joi.array().required(),
    list_desc : joi.string().required(),
    short_desc : joi.string().required(),
    full_desc: joi.string().required(),
    cat : joi.string().required(),
    sub_cat : joi.array().required(),
    store : joi.string().required()
})

export const filterProductValidation = joi.object({
    brand: joi.string(),
    category: joi.string(),
    cost: joi.number(),
    skip: joi.number().required().min(0),
    limit: joi.number().required().min(5),
    name: joi.string(),
    selling: joi.number(),
    type: joi.string()
})

export const updateProductValidation = joi.object({
    brand: joi.string(),
    category: joi.string(),
    cost: joi.string(),
    description: joi.string(),
    image: joi.string(),
    images: joi.string(),
    name: joi.string(),
    selling: joi.string(),
    type: joi.string()
})