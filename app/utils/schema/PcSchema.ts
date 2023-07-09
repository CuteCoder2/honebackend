import { Schema } from "mongoose";
import PcI from "@/utils/interfaces/PcInterface";
import { hardDriveType } from "@/helpers/types/global/commonTypes";

const PcSchema = new Schema<PcI>({
    screen: {
        size: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        dimension: {
            type: String,
            required: true,
        },
        touchable: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    processor: {
        type: {
            type: String,
            required: true,
        },
        speed: {
            type: Number,
            required: true,
        },
    },
    network: {
        type: [String],
        required: true,
    },
    connectivity: {
        type: [String],
        required: true,
    },
    memory: {
        ram: {
            type: Number,
            required: true,
        },
        rom: {
            type: Number,
            required: true,
        },
    },
    hardDrive: {
        type: {
            type: String,
            required: true,
        },
        storage: {
            type: String,
            enum: hardDriveType,
            required: true,
            default: hardDriveType.sat
        }
    },
    battery: {
        autonomies: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        capacity: {
            type: String,
            required: true,
        },
    },
    keyBoard: {
        luminous: {
            type: Boolean,
            required: true
        },
        type: {
            type: String,
            required: true,
        },
    },
    od: {
        type: String,
        required: true,
    },
})

export default PcSchema