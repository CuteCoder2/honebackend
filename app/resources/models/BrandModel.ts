import { model } from "mongoose";
import ModelsNames from "@/helpers/models/name";
import BrandSchema from "@/utils/schema/BrandSchema";
import BrandI from "@/utils/interfaces/BrandInterface";


const BrandModel = model<BrandI>(ModelsNames.brand , BrandSchema)

export default BrandModel