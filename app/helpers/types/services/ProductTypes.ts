import { SchemaTypes } from "mongoose";

export type ProductDataTypes = {
    name: string ,
    cost: number,
    selling: number ,
    brand:typeof SchemaTypes.ObjectId,
    image:string,
    images: string[],
    stock:number,
    colors:string[],
    list_desc : string[],
    short_desc : string,
    full_desc: string,
    cat : typeof SchemaTypes.ObjectId,
    sub_cat : typeof SchemaTypes.ObjectId[],
    store : typeof SchemaTypes.ObjectId[]
}

export type filterProductPropsType = {
    category?:typeof SchemaTypes.ObjectId,
    sub_category?:typeof SchemaTypes.ObjectId[],
    brand?: string,
    cat?: string,
    cost?: string,
    limit: number,
    name?: string,
    selling: string,
    skip: number
}

export type updateProductDatatype = { 
    name?: string ,
    cost?: number,
    selling?: number ,
    brand?:typeof SchemaTypes.ObjectId,
    image?:string,
    images?: string[],
    stock?:number,
    colors?:string[],
    list_desc? : string[],
    short_desc? : string,
    full_desc?: string,
    category? : typeof SchemaTypes.ObjectId,
    sub_category? : typeof SchemaTypes.ObjectId[],
    store? : typeof SchemaTypes.ObjectId[]
}

