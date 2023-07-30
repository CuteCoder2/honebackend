import ModelsNames from "@/helpers/models/name";
import { Schema, SchemaTypes } from "mongoose";
import { TokenSchemaInterface } from "../interfaces/TokenInterface";

const TokenSchema = new Schema<TokenSchemaInterface>({
    expired: {
        type: Date,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    user: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: ModelsNames.user
    },
    deviceInfo: {
        type: String,
        required: true
    }
})

export default TokenSchema