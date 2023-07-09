import { productCat, productType } from "@/helpers/types/global/commonTypes";
import BrandI from "@/utils/interfaces/BrandInterface";

export type ProductDataTypes = {
    name: string,
    cost: number,
    selling: number,
    brand: string,
    image: string,
    images: string,
    description: string,
    category: productCat,
    type: productType
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
    description?:string,
    type?:productType,
    category?:productCat,
    images?: string,
}

