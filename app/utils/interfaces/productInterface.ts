import { Document, SchemaTypes } from "mongoose";

export default interface ProductI extends Document {
    name: string,
    price: {
        cost: number,
        selling: number
    },
    brand: typeof SchemaTypes.ObjectId,
    image: string,
    images: string[],
    stock:number,
    colors:string[],
    list_desc : string[],
    short_desc : string,
    full_desc: string,
    category : typeof SchemaTypes.ObjectId,
    sub_category : typeof SchemaTypes.ObjectId[],
    store : typeof SchemaTypes.ObjectId
}