import {Schema , SchemaTypes , model} from "mongoose"
import ModelsNames from "../helpers/models/name"

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    unite_price: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    descriptions: {
        type: String,
    },
    image: {

        type: Number,
        required: true,
    },
    images: [String],
    brand: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: ModelsNames.product
    },
    created_on: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updated_on: Date,
})

export const ProductModel = model(ModelsNames.product, ProductSchema)