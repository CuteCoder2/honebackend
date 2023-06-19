import { Schema, SchemaTypes, model } from "mongoose";
import ModelsNames from "../helpers/models/name";

const UserAddressSchema = new Schema({
    country : String ,
    town : {
        type:String,
        required: true
    },
    street : {
        type:String,
        required: true
    },
    user : {
        type: SchemaTypes.ObjectId,
        ref : ModelsNames.user,
        required:true
    } 
})


const UserAddress = model(ModelsNames.address , UserAddressSchema)

export default UserAddress 