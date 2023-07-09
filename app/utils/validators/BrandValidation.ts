import joi from "joi"

export const BrandValidation = joi.object({
    name:joi.string().required(),
    image:joi.string().required(),
})

export const updateBrandValidation = joi.object({
    name:joi.string(),
    image:joi.string(),
})
