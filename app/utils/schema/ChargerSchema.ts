import { Schema } from "mongoose"
import ChargerI from "@/utils/interfaces/ChargerInterface"

const ChargerSchema = new Schema<ChargerI>({
    connectorType: {
        type: String,
        required: true
    },
    compatibleDevices: {
        type: [String],
        required: true
    },
    fastCharging: {
        type: Boolean,
        required: true,
        default: false
    },
    mountingType: {
        type: String,
        required: true
    },
    inputVoltage: {
        type: Number,
        required: true
    },
    Amperage: {
        type: Number,
        required: true,
    },
    numUsePort: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

export default ChargerSchema