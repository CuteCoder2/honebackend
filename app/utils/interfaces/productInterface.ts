import { Document, SchemaTypes } from "mongoose";
import BrandI from "@/utils/interfaces/BrandInterface";

export default interface ProductI extends Document {
    name: string,
    price: {
        cost: number,
        selling: number
    },
    stock:number,
    brand: BrandI,
    image: string,
    images: string[],
    description: string,
    category : typeof SchemaTypes.ObjectId,
    sub_category : typeof SchemaTypes.ObjectId,
    colors:string[]

}