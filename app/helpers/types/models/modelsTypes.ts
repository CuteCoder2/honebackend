import { SchemaTypes } from "mongoose";

export type ratingData = {
    product: typeof SchemaTypes.ObjectId,
    user: typeof SchemaTypes.ObjectId,
    rating: number,
}

export type WatchesDataTypes = {
    brand?: string,
    screen?: number,
    id?: typeof SchemaTypes.ObjectId,
    devices?: string[],
    des?: string,
    shape?: string,
    specialCon?: string
}