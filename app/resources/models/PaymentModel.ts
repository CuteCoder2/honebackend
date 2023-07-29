import ModelsNames from "@/helpers/models/name";
import PaymentI from "@/utils/interfaces/PaymentInterface";
import PaymentSchema from "@/utils/schema/PaymentSchema";
import { model } from "mongoose";
import UserModel from "@/resources/models/UserModel";
import HttpException from "@/utils/exceptions/HttpException";

PaymentSchema.pre("save", async function (next) {

    if (!this.isModified("user")) {
        next()
    }
    const user = this.user
    const user_found = await UserModel.findById(user)
    if (!user_found || !user_found.isActive) new HttpException(500, "invalid user or blocked user account")
    next()
})

const PaymentModel = model<PaymentI>(ModelsNames.payment, PaymentSchema)
export default PaymentModel