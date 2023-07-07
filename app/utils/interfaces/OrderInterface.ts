import { Document } from "mongoose";
import { SchemaTypes } from "mongoose"
import { stateType } from "../../helpers/types/global/commonTypes";

export default interface OrderI extends Document {
    user: typeof SchemaTypes.ObjectId,
    products: {
        quantity: number,
        items: typeof SchemaTypes.ObjectId
    }[],
    state : stateType
}