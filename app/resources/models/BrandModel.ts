import { model } from "mongoose";
import ModelsNames from "../../helpers/models/Name";
import BrandSchema from "../../utils/schema/BrandSchema";


const BrandModel = model(ModelsNames.brand , BrandSchema)

export default BrandModel