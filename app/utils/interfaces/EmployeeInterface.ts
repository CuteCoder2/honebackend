import { Document, SchemaTypes } from "mongoose";

export default interface EmployeeI extends Document {
    // user employed
    user:typeof SchemaTypes.ObjectId
    // store employing the user 
    store:typeof SchemaTypes.ObjectId
    // additional role in the store
    add_roles : typeof SchemaTypes.ObjectId[]
    // post/role in the store
    role : typeof SchemaTypes.ObjectId
}