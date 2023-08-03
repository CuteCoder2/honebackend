import { Schema, SchemaTypes } from "mongoose"
import UserI from "@/utils/interfaces/UserInterface"
import { LocalesType, genderType } from "@/helpers/types/common/common"

const UserSchema = new Schema<UserI>({
    username: {
        type: String,
        required: true,
        unique :true,
        trim :true,
    },
    name: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        }
    },
    phone: [String],
    email: {
        type:String,
        unique :true,
        trim :true,
        required:true,
    },
    locale: {
        type:String,
        enum:LocalesType,
        required:true,
        default:LocalesType.en
    },
    gender: {
        type:String,
        enum:genderType,
        required:true,
    },
    stores : SchemaTypes.ObjectId,
    password:{
        type:String ,
        requires:true 
    },
    role : {
        type:String,
        require: true,
        default:"user"
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true,
    },
    isStoreAdmin:{
        type:Boolean,
        required:true,
        default:false,
    },
},
{timestamps:true})

export default UserSchema