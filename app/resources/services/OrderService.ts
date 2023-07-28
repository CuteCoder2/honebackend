import { paymentDataType } from "@/helpers/types/models/modelsTypes"
import HttpException from "@/utils/exceptions/HttpException"
import { SchemaTypes } from "mongoose"
import OrderModel from "../models/OrderModel"

export default class OrderService {
    private model = OrderModel

    private newOder = async (cart_id: typeof SchemaTypes.ObjectId, user_id: typeof SchemaTypes.ObjectId, data: paymentDataType) => {
        try {
            const order = await this.model.create({
                cart: cart_id,
                user: user_id,
            })
        } catch (error) {
            return new HttpException(500, "failed to proceed with payment")
        }
    }


}