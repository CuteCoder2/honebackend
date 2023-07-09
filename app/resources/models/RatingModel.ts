import ModelsNames from "@/helpers/models/name"
import RatingI from "@/utils/interfaces/Rating"
import RatingSchema from "@/utils/schema/RatingSchema"
import { model } from "mongoose"

const RatingModel = model<RatingI>(ModelsNames.rating , RatingSchema)

export default  RatingModel