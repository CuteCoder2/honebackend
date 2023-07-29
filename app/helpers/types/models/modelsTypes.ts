import { SchemaTypes } from "mongoose";

export type ratingData = {
    product: typeof SchemaTypes.ObjectId,
    user: typeof SchemaTypes.ObjectId,
    rating: number,
}

export type paymentDataType = {
    paid_method: string,
    transaction_details: string,
    total_paid: string
}

export type addressDataType = {
    country: string,
    town: string,
    street: string,
    pobox?: string,
}