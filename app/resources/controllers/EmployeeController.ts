import ControllerI from "@/utils/interfaces/ControllersInterface";
import { NextFunction, Request, Response, Router } from "express";
import EmployeeService from "@/resources/services/EmployeeService";
import { filterEmployeeDataType } from "@/helpers/types/models/modelsTypes";
import AuthUserMiddleWare from "@/middleware/authenticatedUserMiddleWare";
import ValidationMiddleWare from "@/middleware/ValidationMiddleWare";
import { createEmployeeValidation, updateEmployeeValidation } from "@/utils/validators/EmployeeValidations";
import { SchemaTypes } from "mongoose";

export default class EmployeeController implements ControllerI {
    path = "/employee";
    router =  Router();
    service = new EmployeeService();

    constructor () {
        this.initRoutes()
    }

    private initRoutes = ()=>{
        this.router.get(`${this.path}`,[AuthUserMiddleWare , ValidationMiddleWare(createEmployeeValidation)],
        this.filterEmployee)

        this.router.post(`${this.path}`,[AuthUserMiddleWare , ValidationMiddleWare(createEmployeeValidation)],
        this.createEmployee)

        this.router.get(`${this.path}`,[AuthUserMiddleWare , ValidationMiddleWare(updateEmployeeValidation)],
        this.updateEmployee)
    }

    private filterEmployee = async (req:Request , res:Response , next:NextFunction) =>{
        try {
            const {add_roles , fname , lname , post , store , user}:filterEmployeeDataType = req.params
            const employees = this.service.filterEmployee({add_roles , fname , lname , post , store , user})
            res.json(employees)
        } catch (error) {
            return next(error)
        }
    }


    
    private createEmployee = async (req:Request , res:Response , next:NextFunction) =>{
        try {
            const {user , store , post}:filterEmployeeDataType = req.params
            const employee = this.service.createEmployee({user , store , post})
            res.json(employee)
        } catch (error) {
            return next(error)
        }
    }
    
    private updateEmployee = async (req:Request , res:Response , next:NextFunction) =>{
        try {
            const {add_roles , fname , lname , post , store , user}:filterEmployeeDataType = req.params
            const id = req.params as unknown as typeof SchemaTypes.ObjectId
            const employee = this.service.updateEmployee(id, {add_roles , fname , lname , post , store , user})
            res.json(employee)
            
        } catch (error) {
            return next(error)
        }
    }
}