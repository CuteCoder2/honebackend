import { storeStatusType } from "@/helpers/types/common/common";
import Joi from "joi";


export const createStoreValidationSchema = Joi.object({
    name:Joi.string().required().min(2),
    img:Joi.string().required().min(2),
    logo:Joi.string().required().min(2),
    imgs:Joi.array().required().min(2),
    description:Joi.string().required().min(2),
    location:{
        lon:Joi.number().required(),
        lat:Joi.number().required(),
    },
    dob: Joi.date().required(),
    status:Joi.allow(storeStatusType).required(),
    owner: Joi.string().required().min(2),
    private_policy : Joi.string().required().min(100)
})




export const updateStoreValidationSchema = Joi.object({
    name:Joi.string().optional().min(2),
    img:Joi.string().optional().min(2),
    logo:Joi.string().optional().min(2),
    imgs:Joi.array().optional().min(2),
    description:Joi.string().optional().min(2),
    location:{
        lon:Joi.number().optional(),
        lat:Joi.number().optional(),
    },
    dob: Joi.date().optional(),
    status:Joi.allow(storeStatusType).optional(),
    owner: Joi.string().optional().min(2),
    private_policy : Joi.string().optional().min(100)
})