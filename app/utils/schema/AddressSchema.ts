import { Schema, SchemaTypes } from "mongoose";
import ModelsNames from "@/helpers/models/name";
import AddressI from "@/utils/interfaces/AddressInterface";

const AddressSchema = new Schema<AddressI>({
    country : String ,
    town : {
        type:String,
        required: true
    },
    street : {
        type:String,
        required: true
    },
    pobox:String,
    user : {
        type: SchemaTypes.ObjectId,
        ref : ModelsNames.user,
        required:true
    } 
},{timestamps:true})

export default AddressSchema
