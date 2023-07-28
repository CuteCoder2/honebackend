import { productCat} from "@/helpers/types/global/commonTypes";
import BrandI from "@/utils/interfaces/BrandInterface";
import { SchemaTypes } from "mongoose";

export type ProductDataTypes = {
    name: string,
    cost: number,
    selling: number,
    brand: string,
    image: string,
    images: string,
    description: string,
    category: productCat,
}

export type filterProductPropsType = {
    brand?: string,
    category?: string,
    cost?: string,
    limit: number,
    name?: string,
    selling: string,
    skip: number
    type?: string,
}

export type updateProductDatatype = { 
    name?: string ,
    cost?: number,
    selling?: number ,
    brand?:BrandI,
    image?:string,
    images?: string[],
    stock?:number,
    colors?:string[],
    list_desc? : string[],
    short_desc? : string,
    full_desc?: string,
    cat? : typeof SchemaTypes.ObjectId,
    sub_cat? : typeof SchemaTypes.ObjectId[],
    store? : typeof SchemaTypes.ObjectId[]
}

