import { Schema, SchemaTypes } from "mongoose";
import PaymentI from "../interfaces/PaymentInterface";
import { PaymentMethod } from "@/helpers/types/common/common";
import ModelsNames from "@/helpers/models/name";

const PaymentSchema = new Schema<PaymentI>({
    paid_method: {
        type: String,
        enum: PaymentMethod,
        required: true
    },
    transaction_details: {
        type: String,
        required: true
    },
    total_paid: {
        type: Number,
        required: true
    },
    oder: {
        type: SchemaTypes.ObjectId,
        required: true
    },
    user:{
        type:SchemaTypes.ObjectId,
        ref:ModelsNames.user,
        required:true,
    }
})

export default PaymentSchema