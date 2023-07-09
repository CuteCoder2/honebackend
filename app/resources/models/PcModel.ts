import ModelsNames from "@/helpers/models/name"
import PcI from "@/utils/interfaces/PcInterface"
import PcSchema from "@/utils/schema/PcSchema"
import { model } from "mongoose"

const PcModel = model<PcI>(ModelsNames.pc , PcSchema)
export default PcModel