import { roleDataType } from "@/helpers/types/models/modelsTypes";
import RoleModel from "@/resources/models/RoleModel";
import HttpException from "@/utils/exceptions/HttpException";
import { SchemaTypes } from "mongoose";

export default class  RoleService {
    private model = RoleModel

    public searchForRole = async ({model , role}:roleDataType)=>{
        try {
            const roles = this.model.find()
            if(model){
                roles.where("model").equals(model)
            }
            if(role){
                roles.where("role").equals(role)
            }
            return await roles
            
        } catch (error) {
            return new HttpException(500 , "failed to get resource")            
        }
    }

    public createRole = async ({model , role}:roleDataType)=>{
        try {
            const new_role = await this.model.create({
                "model":model ,
                "role": role
            })
            return new_role
        } catch (error) {
            return new HttpException(500 , "failed create resource")            
        }
    }


    public updateForRole = async (id:typeof SchemaTypes.ObjectId, {model , role}:roleDataType)=>{
        try {
            const roles = await this.model.findById(id)
            if(!roles) return new HttpException(404 , "resource not found")
            if(model){
                roles.model = model
            }
            if(role){
                roles.role = role
            }
            return await roles.save()
            
        } catch (error) {
            return new HttpException(500 , "failed to get resource")            
        }
    }
}