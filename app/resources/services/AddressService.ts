import HttpException from "@/utils/exceptions/HttpException";
import AddressModel from "../models/AddressModel";
import { SchemaTypes } from "mongoose";
import { addressDataType } from "@/helpers/types/models/modelsTypes";

export default class AddressService {
    private model = AddressModel

    public getUserAddress = async (user : typeof SchemaTypes.ObjectId) =>{
        try {
            const address = await this.model.where("user").equals(user)
            return address
        } catch (error) {
            return new HttpException(400 , "failed to add address")
        }
    }

    public getAddressByI = async (id : typeof SchemaTypes.ObjectId) =>{
        try {
            const address = await this.model.findById(id)

            return address
        } catch (error) {
            return new HttpException(404 , "failed to get resource")
        }
    }

    public addAddress = async (user : typeof SchemaTypes.ObjectId , data:addressDataType)=>{
        try {
            const address = await this.model.create({user : user , ...data})
            return address
        } catch (error) {
            return new HttpException(404 , "failed to add address")
        }
    }
    
    public updateAddress = async (id : typeof SchemaTypes.ObjectId , {country , pobox , street , town}: addressDataType)=>{
        try {
            const address = await this.model.findById(id)
            if(!address) throw Error("resource not found")
            if(country){
                address.country  = country 
            }
            if(pobox){
                address.pobox  = pobox 
            }
            if(street){
                address.street  = street 
            }
            if(town){    
                address.town  = town 
            }
            return await address.save()
        } catch (error) {
            throw Error("failed to update resource")
        }
    }
}