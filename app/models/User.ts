import { Schema, SchemaTypes, model } from "mongoose";
import ModelsNames from "../helpers/models/name";

const UserSchema = new Schema({
    username : {
        type:String,
        required:true
    },
    first_name : {
        type:String,
        required:true
    },
    last_name : {
        type:String,
        required:true
    },
    phone : [String],
    email : String,
    address:{
        type:SchemaTypes.ObjectId,
        ref : ModelsNames.user
    }
})

const User = model(ModelsNames.user , UserSchema)

export default User