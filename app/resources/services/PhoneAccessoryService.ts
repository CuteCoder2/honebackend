import HttpException from "@/utils/exceptions/HttpException";
import PhoneAccessoryModel from "../models/PhoneAccessoryModel";
import { SchemaTypes } from "mongoose";

export default class PhoneAccessoryService {
    private model = PhoneAccessoryModel

    private getPhoneAccessory = async (id:typeof SchemaTypes.ObjectId | undefined , des:string|undefined) => {
        try {
            const PhoneAccessory = this.model.find({})
            if(id){
                PhoneAccessory.where({_id:id})
            }
            if(des){
                PhoneAccessory.where({description:new RegExp(des , 'i')})
            }
            return await PhoneAccessory
        } catch (error) {
            return new HttpException(400 , "failed to add new PhoneAccessory")
        }
    }

    private create = async (description:string)=>{
        try {
            const PhoneAccessory = await this.model.create({description:description})
            return PhoneAccessory
        } catch (error) {
            return new HttpException(400 , "failed to add new PhoneAccessory")
        }
    }

    private updatePhoneAccessory = async (id:typeof SchemaTypes.ObjectId ,description:string)=>{
        try {
            const PhoneAccessory = await this.model.findById(id)
            if(!PhoneAccessory) return new HttpException(400 , "failed to add new PhoneAccessory")
            PhoneAccessory.description = description
            return await PhoneAccessory.save()
        } catch (error) {
            return new HttpException(400 , "failed to add new PhoneAccessory")
        }
    }

    private delete = async (id:typeof SchemaTypes.ObjectId)=>{
        try {
            const PhoneAccessory = await this.model.deleteOne({_id:id})
            return PhoneAccessory 
        } catch (error) {
            return new HttpException(400 , "failed to add new PhoneAccessory")
        }
    }
}