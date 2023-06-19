import { Schema, SchemaTypes, model } from "mongoose";
import ModelsNames from "../helpers/models/name";

const CartSchema = new Schema({
    user:{
        type : SchemaTypes.ObjectId,
        ref : ModelsNames.user
    },
    product : {
        type:[SchemaTypes.ObjectId],
        ref: ModelsNames.product
    },
    ordered : {
        type:Boolean,
        default:false
    },
})

const Cart = model(ModelsNames.cart , CartSchema)

export default Cart