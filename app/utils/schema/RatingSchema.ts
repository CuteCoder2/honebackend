import { Schema, SchemaTypes } from "mongoose"
import RatingI from "@/utils//interfaces/Rating"

const RatingSchema = new Schema<RatingI>({
    product: {
        type: SchemaTypes.ObjectId,
        required: true
    },
    user: {
        type: SchemaTypes.ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
})
export default RatingSchema