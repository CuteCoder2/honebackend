import { Document , SchemaTypes } from "mongoose";

export default interface WatchI extends Document  {
 color:string
 screen:number
 compatibleDevice: typeof SchemaTypes.ObjectId[]   
 description:string
 shape:string
 specialControl:string
}