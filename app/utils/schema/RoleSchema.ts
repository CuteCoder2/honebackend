import { Schema } from "mongoose"
import { roleType } from "@/helpers/types/common/common";
import RoleI from "../interfaces/RoleInterface"

const RoleSchema = new Schema<RoleI>({
    mode:{
        type:String,
        required:true
    },
    role: {
        type:String,
        enum:roleType,
        required:true
    }
})
export default RoleSchema