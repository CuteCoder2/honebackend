import { SchemaTypes } from "mongoose";

export default interface AddressI {
 country:string,
 town:string,
 street:string,
 pobox:string,
 user : typeof SchemaTypes.ObjectId   
}