import { Document } from "mongoose";
import { hardDriveType } from "@/helpers/types/global/commonTypes"

export default interface PcI extends Document {
    screen : {
        size:number,
        type:string,
        dimension:string,
        touchable:boolean
    },
    processor : {
        type:string,
        speed :number,
    },
    network:string[],
    connectivity:string[],
    memory : {
        ram:number,
        rom:number,
    },
    hardDrive :{
        type:string,
        storage : hardDriveType
    },
    battery:{
        autonomies:number,
        type:string,
        capacity:string,
    },
    keyBoard:{
        luminous:boolean,
        type:string,
    },
    od:string,

}