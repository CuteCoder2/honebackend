import { PaymentMethod } from "@/helpers/types/common/common"
import Joi from "joi"

export const createPaymentValidation = Joi.object({
    paid_method: Joi.allow(PaymentMethod).required(),
    transaction_details: Joi.string().required().min(2),
    total_paid: Joi.number().required().min(2),
    oder: Joi.string().required().min(2),
    user: Joi.string().required().min(2)
})

export const updatePaymentValidation = Joi.object({
    paid_method: Joi.allow(PaymentMethod).optional(),
    transaction_details: Joi.string().optional().min(2),
    total_paid: Joi.number().optional().min(2),
    oder: Joi.string().optional().min(2),
    user: Joi.string().optional().min(2)
})