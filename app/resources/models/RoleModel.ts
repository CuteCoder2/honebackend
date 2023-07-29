import ModelsNames from "@/helpers/models/name"
import RoleI from "@/utils/interfaces/RoleInterface"
import RoleSchema from "@/utils/schema/RoleSchema"
import { model } from "mongoose"

const RoleModel = model<RoleI>(ModelsNames.role , RoleSchema)

export default RoleModel