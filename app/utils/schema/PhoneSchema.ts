import { Schema } from "mongoose";
import PhoneI from "@/utils/interfaces/phoneInterface";
import { osType, simType } from "@/helpers/types/global/commonTypes";

const phoneSchema = new Schema<PhoneI>({
    camera: {
        rear: {
            type: String,
            required: true
        },
        back: {
            type: String,
            required: true
        },
    },
    memory: {
        ram: {
            type: Number,
            required: true
        },
        rom: {
            type: Number,
            required: true
        },
        extendable: {
            type: Boolean,
            required: true
        },
        upto: {
            type: Number,
            required: true,
            default: 0
        },
    },
    os: {
        version: {
            type: Number,
            required: true,
        },
        os: {
            type: osType,
            required: true
        },
    },
    battery: {
        capacity: {
            type: String,
            required: true
        },
        wirelessSurpport: {
            type: Boolean,
            required: true
        },
        wirelessType: {
            type: String,
            required: true,
        },
        chargerType: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    processor: {
        name: {
            type: String,
            required: true,
        },
        speed: {
            type: String,
            required: true,
        }
    },
    color: {
        type: String,
        required: true,
    },
    dimension: {
        height: {
            type: Number,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        depth: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        }
    },
    screen: {
        size: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        colorGamut: {
            type: String,
            required: true
        }
    },
    sim: {
        type: {
            type: String,
            enum: simType,
            required: true
        },
        num: { type: Number, required: true }
    },
    network:[String],
    connectivity:[String],
    gps:[String],
    nft:[String],
    audio:[String],
    video:[String],
    chipset:[String],
    sensors:[String],
    inbox:[String],
    state: {
        min: 1,
        max: 100,
        type: Number,
        required: false
    }
})

export default phoneSchema