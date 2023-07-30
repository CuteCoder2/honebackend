import { Schema } from "mongoose"
import { roleType } from "@/helpers/types/common/common";
import RoleI from "../interfaces/RoleInterface"

const RoleSchema = new Schema<RoleI>({
    model:{
        type:String,
        required:true
    },
    role: {
        type:String,
        enum:roleType,
        required:true
    }
},{timestamps:true})
export default RoleSchema