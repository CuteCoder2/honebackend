import { Schema } from "mongoose"
import UserI from "@/utils/interfaces/UserInterface"

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
    phone: [],
    email: {
        type:String,
        unique :true,
        trim :true,
        required:true,
    },
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
},
{timestamps:true})

export default UserSchema