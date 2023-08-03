import { cartProductItem } from "@/helpers/types/common/common"
import Joi from "joi"

export const createCartValidation = Joi.object({
    products: Joi.array<cartProductItem>().required()
})

export const updateCartValidation = Joi.object({
    product: Joi.string().required()
})

export const incOrDecCartItemValidation = Joi.object({
    product: Joi.string().required(),
    increment: Joi.boolean().required()
})