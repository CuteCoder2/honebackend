import { SchemaTypes } from "mongoose"

export enum stateType {
    pen = "pending",
    rej = "rejected",
    val = "validated",
    onw = "on way"
}

export enum storeStatusType {
    act = "active",
    ina = "inactive",
    sus = "suspended",
    blo = "blocked"
}

export enum roleType {
    add = "create",
    add_a = "create any",
    del = "delete",
    del_a = "delete any",
    upd = "update",
    upd_a = "update any",
    viw = "view",
    viw_a = "view any"
}

export enum genderType {
    f = "female",
    m = "male"
}
export enum LocalesType {
    en = "english",
    fr = "french"
}

export enum productCatType {
    elect = "electronic",
}

export enum hardDriveType {
    sat = "SATA",
    ssd = "SSD"
}

export enum PaymentMethod {
    om = "orange Money",
    mtmo = "MTN Mobile Money",
    cart = "cart"
}

export type cartProductItem  = {
        quantity: number,
        item: typeof SchemaTypes.ObjectId,
        unit_price:number
}