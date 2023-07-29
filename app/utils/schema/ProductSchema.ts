import { Schema, SchemaTypes } from "mongoose"
import ModelsNames from "@/helpers/models/name"
import ProductI from "@/utils/interfaces/ProductInterface"

const ProductSchema = new Schema<ProductI>({
    name: {
        type: String,
        required: true,
    },
    price: {
        cost: {
            type: Number,
            required: true,
        },
        selling: {
            type: Number,
            required: true,
        }
    },
    brand: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: ModelsNames.brand
    },
    image: {
        type: String,
        required: true,
    },
    images: [String],
    stock: {
        type: Number,
        required: true
    },
    category : {
        type : SchemaTypes.ObjectId,        
    },
    sub_category : {
        type : [SchemaTypes.ObjectId],
    },
    colors: {
        type: [String],
        required: true
    },
    list_desc: {
        type: [String],
        required: true,
    },
    short_desc: {
        type: String,
        required: true,
    },
    full_desc: {
        type: String,
        required: true,
    },
    store : {
        type:SchemaTypes.ObjectId,
        required:true
    }
},
    { timestamps: true }
)


export default ProductSchema