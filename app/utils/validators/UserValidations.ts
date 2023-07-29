import { genderType, LocalesType } from "@/helpers/types/common/common"
import joi from "joi"
import { SchemaTypes } from "mongoose"

export const registerUserValidationSchema = joi.object({
    first_name: joi.string().max(30).required().min(2),
    last_name: joi.string().max(30).required().min(2),
    email : joi.string().email().required(),
    password : joi.string().min(8).required().min(8),
    username : joi.string().required().min(5),
    phone : joi.string().required().min(10),
    dob : joi.date().required().min((new Date().getFullYear() - 15).toString()),  
    pob: joi.string().required().min(2), 
    store: joi.string().required().min(2),
    address:joi.array<typeof SchemaTypes.ObjectId>().required(),
    gender:joi.allow(genderType).required(),
    lang:joi.allow(LocalesType).required(),
})

export const loginUserValidationSchema = joi.object({
    username : joi.string().required(),
    password : joi.string().min(8).required(),
})


export const UpdateUserValidationSchema = joi.object({
        first_name: joi.string().max(30).optional().min(2),
        last_name: joi.string().max(30).optional().min(2),
        email : joi.string().email().optional(),
        password : joi.string().min(8).optional().min(8),
        username : joi.string().optional().min(5),
        phone : joi.string().optional().min(10),
        dob : joi.date().optional().min((new Date().getFullYear() - 15).toString()),  
        pob: joi.string().optional().min(2), 
        store: joi.string().optional().min(2),
        address:joi.array<typeof SchemaTypes.ObjectId>().optional(),
        gender:joi.allow(genderType).optional(),
        lang:joi.allow(LocalesType).optional(),
    })