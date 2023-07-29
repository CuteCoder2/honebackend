import { roleType } from "@/helpers/types/common/common";
import { Document } from "mongoose";

export default interface RoleI extends Document {
    mode:string,
    role: roleType
}