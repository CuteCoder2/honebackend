import { Schema, SchemaTypes } from "mongoose"
import ProductI from "@/utils/interfaces/productInterface"
import ModelsNames from "@/helpers/models/name"
import { productCat, productType } from "@/helpers/types/global/commonTypes"

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
    description: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true
    },
    category : {
        type : [String],
        enum :Object.values(productCat),        
    },
    type : {
        type : String,
        enum :Object.values(productType),        
    },
    colors: {
        type: [String],
        required: true
    },
},
    { timestamps: true }
)


export default ProductSchema