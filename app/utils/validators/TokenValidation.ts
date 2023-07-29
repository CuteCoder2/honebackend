import Joi from "joi";

export const createOrUpdateTokenValidationSchema = Joi.object({
    expired : Joi.date().required().min(30),
    token : Joi.string().required().min(30),
    user : Joi.string().required(),
    deviceInfo : Joi.string().required().min(30)
})