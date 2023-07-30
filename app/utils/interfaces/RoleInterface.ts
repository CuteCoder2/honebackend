import { roleType } from "@/helpers/types/common/common";
import { Document } from "mongoose";

export default interface RoleI extends Document {
    model:string,
    role: roleType
}