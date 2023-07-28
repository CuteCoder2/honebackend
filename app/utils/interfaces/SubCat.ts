import { Document } from "mongoose";

export interface SubCategoryI extends Document {
    name:string
    icon:string
    img:string
}
