import { Schema, SchemaTypes } from "mongoose";
import EmployeeI from "../interfaces/EmployeeInterface";

const EmployeeSchema = new Schema<EmployeeI>({    // user employed
    user: {
        type: SchemaTypes.ObjectId,
        required: true,
    },
    store: {
        type: SchemaTypes.ObjectId,
        required: true,
    },
    add_roles: {
        type: [SchemaTypes.ObjectId],
        required: true,
    },
    post: {
        type: SchemaTypes.ObjectId,
        required: true,
    }
},
{timestamps:true})

export default EmployeeSchema