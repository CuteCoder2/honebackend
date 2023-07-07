import { Document } from "mongoose";

export default interface BrandI extends Document{
    name:string,
    image:string,
}