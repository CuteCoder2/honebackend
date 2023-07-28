import { paymentDataType } from "@/helpers/types/models/modelsTypes";
import PaymentModel from "@/resources/models/PaymentModel";
import HttpException from "@/utils/exceptions/HttpException";
import { SchemaTypes } from "mongoose";

export default class PaymentService {
    private model = PaymentModel

    private newPayment = async (order_id: typeof SchemaTypes.ObjectId, data: paymentDataType) => {
        try {
            const payment = await this.model.create({
                order: order_id,
                ...data
            })
            return payment
        } catch (error) {
            return new HttpException(500, "failed to proceed with payment")
        }
    }

    

}