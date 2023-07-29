import Joi from "joi"

export const createAddressValidationSchema = Joi.object({
    country: Joi.string().required().min(2),
    town: Joi.string().required().min(2),
    street: Joi.string().required().min(2),
    pobox: Joi.string().required().min(2),
    user: Joi.string().required().min(2)
})


export const updateAddressValidationSchema = Joi.object({
    country: Joi.string().optional().min(2),
    town: Joi.string().optional().min(2),
    street: Joi.string().optional().min(2),
    pobox: Joi.string().optional().min(2),
    user: Joi.string().optional().min(2)
})