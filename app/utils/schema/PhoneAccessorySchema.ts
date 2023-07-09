import { Schema } from "mongoose";
import PhoneAccessoryI from "@/utils/interfaces/PhoneAccessory";

const PhoneAccessorySchema = new Schema<PhoneAccessoryI>({
    description:{
        type:String,
        required:true,
    }
})

export default PhoneAccessorySchema