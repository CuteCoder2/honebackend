import ControllerI from "@/utils/interfaces/ControllersInterface";
import { NextFunction, Request, Response, Router } from "express";
import CategoryService from "@/resources/services/CategoryService";
import AuthUserMiddleWare from "@/middleware/authenticatedUserMiddleWare";
import ValidationMiddleWare from "@/middleware/ValidationMiddleWare";
import { addCategoryValidationSchema, updateCategoryValidationSchema } from "@/utils/validators/CategoryValidations";
import { categoryDataType } from "@/helpers/types/models/modelsTypes";
import { SchemaTypes } from "mongoose";

export default class CategoryController implements ControllerI {
    path =  "/category";
    router =  Router();
    service = new CategoryService();

    constructor(){
        this.initRoutes()
    }

    initRoutes = () => {
        this.router.get(`${this.path}` , 
        [AuthUserMiddleWare , 
        ValidationMiddleWare(addCategoryValidationSchema)],
        this.filterCategories)

        this.router.post(`${this.path}` ,
        [AuthUserMiddleWare , 
        ValidationMiddleWare(addCategoryValidationSchema)],
        this.createCategory)
        this.router.put(`${this.path}` , 
        [AuthUserMiddleWare , 
        ValidationMiddleWare(updateCategoryValidationSchema)],
        this.UpdateCategories)
    }

    private filterCategories = async (req:Request , res:Response , next:NextFunction) => {
        try {
            const {name , sub_categories , id} :categoryDataType = req.params
            const categories = await this.service.filterCategories({name , sub_categories} , id)
            res.json(categories)
        } catch (error) {
            next(error)
        }
    }

    private createCategory = async (req:Request , res:Response , next:NextFunction) => {
        try {
            const { icon ,img , name , sub_categories}:categoryDataType = req.body
            const category = await this.service.createCategory({ icon , img , name , sub_categories})
            res.json(category)
        } catch (error) {
            next(error)
        }
    }
    
    private UpdateCategories = async (req:Request , res:Response , next:NextFunction) => {
        try {
        const { icon , img , name , sub_categories}:categoryDataType = req.body
        const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
        const category = await this.service.UpdateCategories({ icon , id , img , name , sub_categories} , id)
        res.json(category)
            
        } catch (error) {
            next(error)
        }
    }



}