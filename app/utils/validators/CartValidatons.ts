import { cartProductItem } from "@/helpers/types/common/common"
import Joi from "joi"

export const createOrUpdateCartValidation = Joi.object({
    user: Joi.types(),
    ordered:Joi.boolean().optional(),
    products: Joi.array<cartProductItem>().required()
})
