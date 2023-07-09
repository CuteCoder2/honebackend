import { Document } from "mongoose";

export default interface ChargerI extends Document  {
    connectorType: string
    compatibleDevices : string[]
    fastCharging : boolean
    mountingType : string
    inputVoltage : number
    Amperage : number
    numUsePort : number
    description : string
}