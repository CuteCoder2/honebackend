import { Schema } from "mongoose"
import UserInterface from "../interfaces/UserInterface"

const UserSchema = new Schema<UserInterface>({
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
    }
},
{timestamps:true})

export default UserSchema