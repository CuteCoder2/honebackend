import { storeStatusType } from "@/helpers/types/common/common";
import Joi from "joi";

export const createStoreValidationSchema = Joi.object({
    name: Joi.string().required().min(2),
    img: Joi.string().required().min(2),
    logo: Joi.string().required().min(2),
    imgs: Joi.array<string>().required(),
    description: Joi.string().required().min(2),
    lon: Joi.number().required(),
    lat: Joi.number().required(),
    dob: Date,
    status: Joi.allow(storeStatusType).required(),
    owner: Joi.string().required(),
    private_policy: Joi.string().required().min(2)
})

export const updateStoreValidationSchema = Joi.object({
    name: Joi.string().optional().min(2),
    img: Joi.string().optional().min(2),
    logo: Joi.string().optional().min(2),
    imgs: Joi.array<string>().optional(),
    description: Joi.string().optional().min(2),
    lon: Joi.number().optional(),
    lat: Joi.number().optional(),
    dob: Date,
    status: Joi.allow(storeStatusType).optional(),
    owner: Joi.string().optional(),
    private_policy: Joi.string().optional().min(2)
})