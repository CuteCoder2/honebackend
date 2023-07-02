import { Schema, SchemaTypes } from "mongoose"
import bcrypt from "bcrypt"
import UserInterface from "../interfaces/UserInterface"

const UserSchema = new Schema<UserInterface>({
    username: {
        type: String,
        required: true
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

UserSchema.pre('save' , async function (next){
    if(!this.isModified('password')){
        return next()
    }
    const hashedPassword = await bcrypt.hash(this.password , 10)
    this.password = hashedPassword
    next()
})


UserSchema.methods.isValidPassword = async function(password:string) :Promise<Error | boolean>{
    return await bcrypt.compare(password , this.password)
}

export default UserSchema