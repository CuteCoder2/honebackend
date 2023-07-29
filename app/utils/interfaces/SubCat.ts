import { Document } from "mongoose";

export default interface SubCategoryI extends Document {
    name:string
    icon:string
    img:string
}
