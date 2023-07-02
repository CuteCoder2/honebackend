import { Document } from "mongoose";


export default  interface UserInterface extends Document {
    email:string,
    name:{
        first_name:string,
        last_name:string,
    },
    phone:string,
    username:string,
    password:string,
    role:string,
    isValidPassword(password:string): Promise<Error | boolean> ,
}