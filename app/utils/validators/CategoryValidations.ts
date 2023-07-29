import Joi from "joi";
import { SchemaTypes } from "mongoose";

export const addCategoryValidationSchema = Joi.object({
    name: Joi.string().required(),
    icon: Joi.string().required(),
    img: Joi.string().required(),
    sub_categories: Joi.array<typeof SchemaTypes.ObjectId>().optional()
})

export const updateCategoryValidationSchema = Joi.object({
    name: Joi.string().optional(),
    icon: Joi.string().optional(),
    img: Joi.string().optional(),
    sub_categories: Joi.array<typeof SchemaTypes.ObjectId>().optional()
})