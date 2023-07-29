import BrandI from "@/utils/interfaces/BrandInterface";
import { SchemaTypes } from "mongoose";

export type ProductDataTypes = {
    name: string,
    cost: number,
    selling: number,
    brand: string,
    image: string,
    images: [string],
    description: string,
    category?:typeof SchemaTypes.ObjectId,
    sub_category?:typeof SchemaTypes.ObjectId[],
}

export type filterProductPropsType = {
    category?:typeof SchemaTypes.ObjectId,
    sub_category?:typeof SchemaTypes.ObjectId[],
    brand?: string,
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
    description?:string,
    category?:typeof SchemaTypes.ObjectId,
    sub_category?:typeof SchemaTypes.ObjectId[],
    images?: string,
}

