import { Schema, SchemaTypes } from "mongoose";
import CategoryI from "../interfaces/CategoryInterface";

const CategorySchema = new Schema<CategoryI>({
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        sub_categories: {
            type: [SchemaTypes.ObjectId],
            required: true
        }
    },{timestamps:true})

export default CategorySchema