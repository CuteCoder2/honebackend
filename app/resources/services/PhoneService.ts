import { PhoneModel } from "@/resources/models/PhoneModel"
import HttpException from "@/utils/exceptions/HttpException"
import PhoneI from "@/utils/interfaces/phoneInterface"
import ServiceI from "@/utils/interfaces/ServiceInterface"
import { SchemaTypes } from "mongoose"

export default class PhoneService {

   private model = PhoneModel

    private create = async (data:PhoneI)=>{
        try {
            const phone = await this.model.create({...data})
            return phone
        } catch (error) {
            return new HttpException(400 , "failed to add model" )
        }
    }
    
    private update = async (id: typeof SchemaTypes.ObjectId)=>{
        try {
            const phone = await this.model.findById(id)
            return phone
        } catch (error) {
            return new HttpException(400 , "failed to update phone" )
        }
    }
}