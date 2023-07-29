import { Document, SchemaTypes } from "mongoose";

export default  interface CategoryI extends Document {
    name:string
    icon:string
    img:string
    sub_cats?: typeof SchemaTypes.ObjectId[]
}

