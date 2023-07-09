import { model } from "mongoose";
import ModelsNames from "@/helpers/models/name";
import UserSchema from "@/utils/schema/UserSchema";
import bycrpt from "bcrypt"


UserSchema.pre('save' , async function (next){
    if(!this.isModified('password')){
        return next()
    }
    const hashedPassword = await bycrpt.hash(this.password , 10)
    this.password = hashedPassword
    next()
})


UserSchema.methods.isValidPassword = async function(password:string) :Promise<Error | boolean>{
    return await bycrpt.compare(password , this.password)
}

const UserModel = model(ModelsNames.user, UserSchema)

export default UserModel