import { Schema , model } from "mongoose";
import ModelsNames from "../../helpers/models/Name";

const BrandSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    image : String
})

const Brand = model(ModelsNames.brand , BrandSchema)
export default Brand