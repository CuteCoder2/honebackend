import { PaymentMethod } from "@/helpers/types/common/common";
import { SchemaTypes } from "mongoose";

export default interface PaymentI {
    paid_method:PaymentMethod,
    transaction_details:string,
    total_paid:number,
    oder: typeof SchemaTypes.ObjectId
    user: typeof SchemaTypes.ObjectId
}