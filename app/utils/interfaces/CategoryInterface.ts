import { Document, SchemaTypes } from "mongoose";

export default  interface CategoryI extends Document {
    name:string
    icon:string
    img:string
    sub_categories?: typeof SchemaTypes.ObjectId[]
}

