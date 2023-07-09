import { Document , SchemaTypes } from "mongoose";

export default interface CartI extends Document {
    user: typeof SchemaTypes.ObjectId,
    products: {
        quantity: number,
        items: typeof SchemaTypes.ObjectId
    }[]
}