import { number } from "joi";
import { SchemaTypes } from "mongoose";
import { hardDriveType, osType, simType } from "../common/common";

export type ratingData = {
    product: typeof SchemaTypes.ObjectId,
    user: typeof SchemaTypes.ObjectId,
    rating: number,
}

export type WatchesDataTypes = {
    brand?: string,
    screen?: number,
    id?: typeof SchemaTypes.ObjectId,
    devices?: string[],
    des?: string,
    shape?: string,
    specialCon?: string
}

export type PcDataType = {
    screen?: {
        size: number,
        type: string,
        dimension: string,
        touchable: boolean
    },
    processor?: {
        type: string,

        speed: number,
    },
    network?: string[],
    connectivity?: string[],
    memory?: {
        ram: number
        rom: number
    },
    hardDrive?: {
        type: string
        storage: hardDriveType,
    },
    battery?: {
        autonomies: number,
        type: string
        capacity: string
    },
    keyBoard?: {
        luminous: boolean,
        type: string,
    },
    os?: string
}

export type PhoneDataType = {
    camera?: {
        rear: string,
        back: string,
    },
    memory?: {
        ram: number,
        rom: number,
        extendable: boolean,
        upto: number | null
    },
    os?: {
        version: number,
        os: osType,
    },
    battery?: {
        capacity: string,
        wirelessSupport: boolean,
        wirelessType: string,
        chargerType: string,
        description: string

    },
    processor?: {
        name: string,
        speed: string
    },
    color?: string,
    dimension?: {
        height: number,
        width: number,
        depth: number,
        weight: number
    },
    screen?: {
        size: number,
        color: string,
        type: string,
        colorGamut: string
    }
    sim?: {
        type: simType,
        num: number
    },
    network?: string[],
    connectivity?: string[],
    gps?: string[],
    nft?: string[],
    audio?: string[],
    video?: string[],
    chipset?: string[],
    sensors?: string[],
    inbox?: string[],
    state?: number,
    prodDate?: Date,
}


export type paymentDataType = {
    paid_method: string,
    transaction_details: string,
    total_paid: string
}

export type addressDataType = {
    country: string,
    town: string,
    street: string,
    pobox?: string,
}