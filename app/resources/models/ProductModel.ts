import { model } from "mongoose"
import ModelsNames from "../../helpers/models/Name"
import ProductSchema from "../../utils/schema/ProductSchema"


export const ProductModel = model(ModelsNames.product, ProductSchema)