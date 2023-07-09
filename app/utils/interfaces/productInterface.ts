import { Document } from "mongoose";
import BrandI from "@/utils/interfaces/BrandInterface";
import { productCat, productType } from "@/helpers/types/global/commonTypes";

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
    category : productCat[],
    type : productType

}