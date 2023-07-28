import { Document, SchemaTypes } from "mongoose";

export default interface StoreI extends Document {
    name:string
    img:string
    imgs:string[]
    description:string,
    location:{
        lon:number,
        lat:number,
    },
    dob: Date
    owner: typeof SchemaTypes.ObjectId
}