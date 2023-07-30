import { filterEmployeeDataType } from "@/helpers/types/models/modelsTypes";
import EmployeeModel from "@/resources/models/EmployeeModel";
import HttpException from "@/utils/exceptions/HttpException";
import { SchemaTypes } from "mongoose";

export default class EmployeeService {
    private model = EmployeeModel
    
    public filterEmployee = async ({add_roles , fname , lname , post , store , user}:filterEmployeeDataType)=>{
        try {
            const employee = this.model.find()
            if(store) {
                employee.where("store").equals(store)
            }
            if(fname) {
                employee.where({"user.first_name" : new RegExp(fname ,"i")})
            }
            if(lname) {
                employee.where({"user.last_name" : new RegExp(lname ,"i")})
            }
            if(user) {
                employee.where("user").equals(user)
            }
            if(post) {
                employee.where("post").equals(post)
            }
            if(add_roles) {
              employee.where("add_roles").in(add_roles)
            }
            return await employee
        } catch (error) {
            return new HttpException(500 , "failed to get resource")
        }
    }

    public createEmployee = async ({user , store , post}:filterEmployeeDataType)=>{
        try {
            const employee = await this.model.create({
                "user":user,
                "store":store,
                "post":post
            })
            return employee
        } catch (error) {
            return new HttpException(500  , "failed to create resource")
        }
    }


    public updateEmployee = async (id:typeof SchemaTypes.ObjectId , {add_roles , fname , lname , post , store , user}:filterEmployeeDataType)=>{
        try {
            const employee = await this.model.findById(id)
            if(!employee) return new HttpException(404 , "resource not found")
            if(store) {
                employee.store = store
            }
            if(user) {
                employee.user = user
            }
            if(post) {
                employee.post = post
            }
            if(add_roles) {
              employee.add_roles.push(...add_roles)
            }
            return await employee.save()
        } catch (error) {
            return new HttpException(500 , "failed to get resource")
        }
    }
}