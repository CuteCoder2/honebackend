import { Document } from "mongoose";

export default interface BrandInterface extends Document{
    name:string,
    image:string,
}