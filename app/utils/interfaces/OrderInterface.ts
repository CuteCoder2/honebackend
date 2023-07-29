import { Document } from "mongoose";
import { SchemaTypes } from "mongoose"
import { stateType } from "@/helpers/types/common/common";

export default interface OrderI extends Document {
    cart: typeof SchemaTypes.ObjectId,
    payment: typeof SchemaTypes.ObjectId[],
    state : stateType
    discount:number
    total_cost : number
}