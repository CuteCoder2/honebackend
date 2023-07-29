import joi from "joi";

export const createProductValidationSchema = joi.object({
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

export const filterProductValidationSchema = joi.object({
    brand: joi.string().optional(),
    category: joi.string().optional(),
    cost: joi.number().optional(),
    skip: joi.number().optional().min(0),
    limit: joi.number().optional().min(5),
    name: joi.string().optional(),
    selling: joi.number().optional(),
    type: joi.string().optional()
})

export const updateProductValidationSchema = joi.object({
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