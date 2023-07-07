import { Schema, SchemaTypes } from "mongoose"
import ModelsNames from "../../helpers/models/Name"
import { stateType } from "../../helpers/types/global/commonTypes"
import OrderI from "../interfaces/OrderInterface"

const OrderSchema = new Schema<OrderI>({
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
        iems: {
            required: true,
            type: [SchemaTypes.ObjectId],
            ref: ModelsNames.product
        }
    }],
    state : {
        type:String,
        enum : Object.values(stateType),
        required:true,
        default:stateType.pen
    }
})


export default OrderSchema