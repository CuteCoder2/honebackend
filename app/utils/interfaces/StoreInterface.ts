import { storeStatusType } from "@/helpers/types/common/common";
import { Document, SchemaTypes } from "mongoose";

export default interface StoreI extends Document {
    name:string,
    img:string,
    logo:string,
    imgs:string[],
    description:string,
    location:{
        lon:number,
        lat:number,
    },
    contacts: string[],
    email: string,
    dob: Date,
    status:storeStatusType,
    owner: typeof SchemaTypes.ObjectId,
    private_policy : string
}