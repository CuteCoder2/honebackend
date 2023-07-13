import { Schema, SchemaTypes } from "mongoose"
import CartI from "@/utils/interfaces/CartInterface"
import ModelsNames from "@/helpers/models/name"

const CartSchema = new Schema<CartI>({
    user: {
        type: SchemaTypes.ObjectId,
        ref: ModelsNames.user,
        required: true,
    },
    ordered:{
        type:Boolean,
        required:true,
        default:false
    },
    products: [{
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        unit_price :{
            type:Number,
            required:true
        },
        item: {
            required: true,
            type: SchemaTypes.ObjectId,
            ref: ModelsNames.product
        }
    }]
})


export default CartSchema