import ModelsNames from "@/helpers/models/name"
import EmployeeI from "@/utils/interfaces/EmployeeInterface"
import EmployeeSchema from "@/utils/schema/EmployeeSchema"
import { model } from "mongoose"

const EmployeeModel = model<EmployeeI>(ModelsNames.category , EmployeeSchema)

export default EmployeeModel