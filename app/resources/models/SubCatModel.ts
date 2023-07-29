import ModelsNames from "@/helpers/models/name"
import SubCategoryI from "@/utils/interfaces/SubCat"
import SubCategorySchema from "@/utils/schema/SubCategorySchema"
import { model } from "mongoose"

const SubCategoryModel = model<SubCategoryI>(ModelsNames.sub_category , SubCategorySchema)

export default SubCategoryModel