import { Schema, SchemaTypes } from "mongoose"
import ProductI from "@/utils/interfaces/productInterface"
import ModelsNames from "@/helpers/models/name"

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
    cat: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: ModelsNames.cat
    },
    sub_cat: {
        type: [SchemaTypes.ObjectId],
        required: true,
        ref: ModelsNames.sub_cat
    },
    store : {
        type:SchemaTypes.ObjectId,
        required:true
    }
},
    { timestamps: true }
)


export default ProductSchema