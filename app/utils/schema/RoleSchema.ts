import { Schema } from "mongoose"
import RoleI from "@/utils/interfaces/RoleInterface"
import { roleType } from "@/helpers/types/common/common"

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