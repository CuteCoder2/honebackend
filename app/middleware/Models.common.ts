import joi from "joi"


export const deleteDataValidation = joi.object({
    id: joi.string().required()
})