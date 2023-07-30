import { storeStatusType } from "@/helpers/types/common/common";
import { Schema, SchemaTypes } from "mongoose";
import StoreI from "@/utils/interfaces/StoreInterface";

const StoreSchema = new Schema<StoreI>({
    name: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    imgs: {
        type: [String],
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    location: {
        lon: {
            type: Number,
            require: true,
        },
        lat: {
            type: Number,
            require: true,
        },
    },
    dob: {
        type: Date,
        require: true,
    },
    contacts: {
        type: [String],
        required: true,
    },
    email: String,
    status: {
        type: String,
        require: true,
        enum: storeStatusType,
        default: storeStatusType.ina
    },
    owner: {
        type: SchemaTypes.ObjectId,
        require: true,
    },
    private_policy: {
        type: String,
        require: true,
    },
},{timestamps:true})

export default StoreSchema