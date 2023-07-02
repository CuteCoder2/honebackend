import { Schema, SchemaTypes, model } from "mongoose"
import ModelsNames from "../../helpers/models/Name";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    camera: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    takesSdard: {
        type: Boolean,
        default: false
    },
    sdCard: String,
    price: {
        type: Number,
        required: true,
    },
    descriptions: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    images: [String],
    brand: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: ModelsNames.product
    },
    state: {
        min: 1,
        max: 100,
        type: Number,
        required: false
    },
    created_on: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updated_on: Date,
})

export const ProductModel = model(ModelsNames.product, ProductSchema)