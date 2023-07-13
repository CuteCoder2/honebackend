import { Document , SchemaTypes } from "mongoose";

export default interface CartI extends Document {
    user: typeof SchemaTypes.ObjectId,
    ordered:boolean,
    products: {
        quantity: number,
        item: typeof SchemaTypes.ObjectId,
        unit_price:number
    }[]
}