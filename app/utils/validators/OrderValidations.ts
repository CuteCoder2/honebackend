import { stateType } from "@/helpers/types/common/common";
import Joi from "joi";
import { SchemaTypes } from "mongoose";

export const addOrderValidationSchema = Joi.object({
    cart: Joi.string().required(),
    payment: Joi.array<typeof SchemaTypes.ObjectId>().required(),
    discount:Joi.number().required(),
    total_cost : Joi.number().required(),
})


export const updateOrderValidationSchema = Joi.object({
    cart: Joi.string().optional(),
    payment: Joi.array<typeof SchemaTypes.ObjectId>().optional(),
    state : Joi.allow(stateType).optional,
    discount:Joi.number().optional(),
    total_cost : Joi.number().optional(),
})
