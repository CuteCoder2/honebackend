import { Document } from "mongoose";
import BrandI from "./BrandInterface";
import { productCat, productType } from "../../helpers/types/global/commonTypes";

export default interface ProductI extends Document {
    name: string,
    price: {
        cost: number,
        selling: number
    },
    brand: BrandI,
    image: string,
    images: string[],
    describtion: string,
    category : productCat[],
    type : productType

}