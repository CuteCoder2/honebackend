import HttpException from "@/utils/exceptions/HttpException";
import AddressModel from "../models/AddressModel";
import { SchemaTypes } from "mongoose";
import { addressDataType } from "@/helpers/types/models/modelsTypes";

export default class AddressService {
    private model = AddressModel

    private addAddress = async (user : typeof SchemaTypes.ObjectId , data:addressDataType)=>{
        try {
            const address = await this.model.create({user : user , ...data})
            return address
        } catch (error) {
            return new HttpException(400 , "failed to add address")
        }
    }
}