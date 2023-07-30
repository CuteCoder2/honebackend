import { Schema, SchemaTypes } from "mongoose"
import ModelsNames from "@/helpers/models/name"
import { stateType } from "@/helpers/types/common/common"
import OrderI from "@/utils/interfaces/OrderInterface"

const OrderSchema = new Schema<OrderI>({
    cart: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: ModelsNames.product
    },
    state: {
        type: String,
        enum: Object.values(stateType),
        required: true,
        default: stateType.pen
    },
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
    payment:{
        type:[SchemaTypes.ObjectId],
        ref:ModelsNames.payment,
        required:true
    }
},{timestamps:true})


export default OrderSchema