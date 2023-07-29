import { genderType, LocalesType } from "@/helpers/types/common/common";
import { Document, SchemaTypes } from "mongoose";


export default  interface UserI extends Document {
    name:{
        first_name:string,
        last_name:string,
    },
    dob?:string,
    pob?:string,
    phone:Array<string>,
    email:string,
    username:string,
    password:string,
    stores:typeof SchemaTypes.ObjectId,
    address:typeof SchemaTypes.ObjectId[],
    gender:genderType,
    lang: LocalesType,
    role?:typeof SchemaTypes.ObjectId[],
    isAdmin:boolean,
    isStoreAdmin:boolean,
    isActive:boolean,
    isValidPassword(password:string): Promise<Error | boolean> ,
}