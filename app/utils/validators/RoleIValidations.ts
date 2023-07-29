import Joi from "joi";

export const createOrUpdateRoleValidationSchema = Joi.object({
    mode:Joi.string().required().min(2),
    role:Joi.string().required().min(2),
})