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
    address:typeof SchemaTypes.ObjectId[],
    stores:typeof SchemaTypes.ObjectId,
    role?:typeof SchemaTypes.ObjectId[],
    isAdmin:boolean,
    isStoreAdmin:boolean,
    isActive:boolean,
    isValidPassword(password:string): Promise<Error | boolean> ,
}