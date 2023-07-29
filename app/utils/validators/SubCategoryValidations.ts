import Joi from "joi";

export const createSubCategoryValidationSchema = Joi.object({
    name:Joi.string().required().min(2),
    icon:Joi.string().required().min(2),
    img:Joi.string().required().min(2),
})


export const updateSubCategoryValidationSchema = Joi.object({
    name:Joi.string().required().min(2),
    icon:Joi.string().required().min(2),
    img:Joi.string().required().min(2),
})