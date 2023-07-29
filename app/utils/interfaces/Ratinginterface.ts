import { Document, SchemaTypes } from "mongoose";

export default interface RatingI extends Document{
    product:typeof SchemaTypes.ObjectId,
    user: typeof SchemaTypes.ObjectId,
    rating: number,
}