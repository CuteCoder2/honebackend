import ModelsNames from "@/helpers/models/name"
import { TokenSchemaInterface } from "@/utils/interfaces/TokenInterface"
import TokenSchema from "@/utils/schema/TokenSchema"
import { hash } from "bcrypt"
import { model } from "mongoose"

TokenSchema.pre("save" , async function (next){
    const hashedToken = await hash(this.token , 10)
    this.token = hashedToken
    next()
})

const TokenModel = model<TokenSchemaInterface>(ModelsNames.token , TokenSchema)

export default TokenModel