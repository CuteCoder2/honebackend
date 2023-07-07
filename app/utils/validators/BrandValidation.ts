import joi from "joi"

const BrandValidation = joi.object({
    name:joi.string().required(),
    image:joi.string().required(),
})



export default {BrandValidation}