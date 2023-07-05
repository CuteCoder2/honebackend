import { Document } from "mongoose";
import BrandI from "./BrandInterface";

export default interface Product extends Document{
    name:string,
    price : {
        cost_price:number,
        selling_price:number
    },
    camera:{
        front:string,
        back:string,
    },
    image:string,
    extra_images : string[],
    brand:BrandI,
    descrbtion:strin