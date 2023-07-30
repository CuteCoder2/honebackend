import { SchemaTypes } from "mongoose";
import { roleType, storeStatusType } from "@/helpers/types/common/common";

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
    country?: string,
    town?: string,
    street?: string,
    pobox?: string,
}

export type categoryDataType = {
    name?: string,
    icon?: string,
    img?: string,
    sub_categories?: typeof SchemaTypes.ObjectId[]
}

export type filterEmployeeDataType = {
    user?: typeof SchemaTypes.ObjectId,
    store?: typeof SchemaTypes.ObjectId,
    add_roles?: typeof SchemaTypes.ObjectId[],
    post?: typeof SchemaTypes.ObjectId,
    fname?: string,
    lname?: string,
}

export type roleDataType = {
    model?: string,
    role?: roleType
}

export type storeDataType = {
    name?: string,
    img?: string,
    logo?: string,
    imgs?: string[],
    description?: string,
    lon?: number,
    lat?: number,
    contacts?: string[],
    email?: string,
    dob?: Date,
    private_policy?: string
}

export type tokenDataType = {
    expired? : Date,
    token ?: string, 
    deviceInfo? : string
}