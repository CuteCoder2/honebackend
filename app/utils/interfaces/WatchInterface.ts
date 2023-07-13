import { Document , SchemaTypes } from "mongoose";

export default interface WatchI extends Document  {
 screen:number
 compatibleDevice: typeof SchemaTypes.ObjectId[]   
 description:string
 shape:string
 specialControl:string
}