import ModelsNames from "@/helpers/models/name"
import WatchI from "@/utils/interfaces/WatchInterface"
import WatchSchema from "@/utils/schema/WatchSchema"
import { model } from "mongoose"

const WatchModel = model<WatchI>(ModelsNames.watch , WatchSchema)
export default WatchModel