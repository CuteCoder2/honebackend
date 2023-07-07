import { Schema, SchemaTypes } from "mongoose"
import CartI from "../interfaces/CartInterface"
import ModelsNames from "../../helpers/models/Name"

const CartSchema = new Schema<CartI>({
    user: {
        type: SchemaTypes.ObjectId,
        ref: ModelsNames.user,
        required: true,
    },
    products: [{

        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        items: {
            required: true,
            type: [SchemaTypes.ObjectId],
            ref: ModelsNames.product
        }
    }]
})


export default CartSchema