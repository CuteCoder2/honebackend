import  {Schema, SchemaTypes} from "mongoose"

export interface TokenI extends Object {
    id:Schema.Types.ObjectId,
    expired : Date
}
export interface TokenSchemaInterface extends Document {
    expired : Date,
    token : string,
    user : typeof SchemaTypes.ObjectId,
    deviceInfo : string
} 