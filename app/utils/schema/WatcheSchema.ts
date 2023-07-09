import { Schema, SchemaTypes } from "mongoose";
import WatchI from "@/utils/interfaces/WatchInterface";

const WatchSchema = new Schema<WatchI>({
    color: {
        type: String,
        required: true
    },
    screen: {
        type: Number,
        required: true
    },
    compatibleDevice: {
        type: [SchemaTypes.ObjectId],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shape: {
        type: String,
        required: true
    },
    specialControl: {
        type: String,
        required: true
    }
})

export default WatchSchema