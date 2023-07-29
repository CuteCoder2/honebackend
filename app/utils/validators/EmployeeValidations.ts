import Joi from "joi";
import { SchemaTypes } from "mongoose";

export const createEmployeeValidation = Joi.object({
    user: Joi.string().required(),
    store: Joi.string().required(),
    add_roles: Joi.string().required(),
    role: Joi.array<typeof SchemaTypes.ObjectId>().required()
})

export const updateEmployeeValidation = Joi.object({
    user: Joi.string().optional(),
    store: Joi.string().optional(),
    add_roles: Joi.string().optional(),
    role: Joi.array<typeof SchemaTypes.ObjectId>().required()
})