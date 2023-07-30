import { Schema } from "mongoose";
import BrandInterface from "@/utils/interfaces/BrandInterface";

const BrandSchema = new Schema<BrandInterface>({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{timestamps:true})

export default BrandSchema