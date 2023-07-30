import HttpException from "@/utils/exceptions/HttpException"
import TokenModel from "@/resources/models/TokenModel"
import { tokenDataType } from "@/helpers/types/models/modelsTypes"
import { SchemaTypes } from "mongoose"
import { compare } from "bcrypt"

export default class TokenService {
    private model = TokenModel

    public filterToken = async ({expired , token}:tokenDataType , user?:typeof SchemaTypes.ObjectId)=>{
        try {
            const tokens = this.model.find()
            if(user){
                tokens.where('user').equals(user)
            }
            if(expired){
                tokens.where('expired').equals(expired)
            }
            if(token){
                const results = await tokens
                results.filter(async (instance ) => {
                    return await compare(instance.token , token)
                })
                return results
            }else{
                return await tokens
            }
        } catch (error) {
            return new HttpException(500 , "failed to get resource")
        }
    }
    

    public createToken = async ({deviceInfo , expired , token }:tokenDataType , user?:typeof SchemaTypes.ObjectId)=>{
        try {
            const newToken = await this.model.create({
                "expired":expired,
                "user" : user,
                "deviceInfo" : deviceInfo,
                "token":token
            })
            return newToken
        } catch (error) {
            return new HttpException(500 , "failed to create resource")
        }
    }
    
}