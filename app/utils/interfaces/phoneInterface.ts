import { Document } from "mongoose";
import { osType, simType } from "@/helpers/types/global/commonTypes";

export default interface PhoneI extends Document {
    camera: {
        rear: string,
        back: string,
    },
    memory: {
        ram: number,
        rom: number,
        extendable: boolean,
        upto: number | null
    },
    os: {
        version: number,
        os: osType,
    },
    battery: {
        capacity:string,
        wirelessSupport:boolean,
        wirelessType:string,
        chargerType:string,
        description:string
    
    },
    processor: {
        name: string,
        speed: string
    },
    color: string,
    dimension: {
        height: number,
        width: number,
        depth: number,
        weight: number
    },
    screen : {
        size:number,
        color:string,
        type:string,
        colorGamut:string
    }
    sim:{
        type: simType,
        num : number
    },
    network:string[],
    connectivity:string[],
    gps:string[],
    nft:string[],
    audio:string[],
    video:string[],
    chipset:string[],
    sensors:string[],
    inbox:string[],
    state: number,
    prodDate: Date,
}