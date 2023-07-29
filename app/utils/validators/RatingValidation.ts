import Joi from "joi";

export const createRatingValidationSchema = Joi.object({
    product:Joi.string().required().min(2),
    user: Joi.string().required().min(2),
    rating: Joi.number().required().min(2),
})

export const updateRatingValidationSchema = Joi.object({
    product:Joi.string().required().min(2),
    user: Joi.string().required().min(2),
    rating: Joi.number().required().min(0).max(5),
})