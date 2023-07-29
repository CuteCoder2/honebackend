import ModelsNames from "@/helpers/models/name";
import StoreI from "@/utils/interfaces/StoreInterface";
import StoreSchema from "@/utils/schema/StoreSchema";
import { model } from "mongoose";


const StoreModel = model<StoreI>(ModelsNames.store , StoreSchema)

export default StoreModel