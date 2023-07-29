import ModelsNames from "@/helpers/models/name"
import CategoryI from "@/utils/interfaces/CategoryInterface"
import CategorySchema from "@/utils/schema/CategorySchema"
import { model } from "mongoose"

const CategoryModel = model<CategoryI>(ModelsNames.category , CategorySchema)

export default CategoryModel