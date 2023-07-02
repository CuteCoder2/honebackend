import { Schema, SchemaTypes, model } from "mongoose";
import ModelsNames from "../../helpers/models/Name";

const OrderSchema = new Schema({
    user:{
        type : SchemaTypes.ObjectId,
        ref : ModelsNames.user
    },
    cart :{
        type : SchemaTypes.ObjectId,
        ref : ModelsNames.cart
    } ,
    total_cost : {
        type:Number,
        required : true
    },
    discount:{
        type:Number,
        min:0,
        max:100,
        default : 0,
    },
    total_paid:{
        type:Number,
        min:0,
        require:true
    }
})

const Order = model(ModelsNames.cart , OrderSchema)
export default Order