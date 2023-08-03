import { categoryDataType } from "@/helpers/types/models/modelsTypes";
import CategoryModel from "@/resources/models/CategoryModel";
import HttpException from "@/utils/exceptions/HttpException";
import { SchemaTypes } from "mongoose";

export default class CategoryService {

    private model = CategoryModel

    public filterCategories = async ({name , sub_categories} : categoryDataType ,     id?: typeof SchemaTypes.ObjectId,) => {
        try {
            const cates =  this.model.find()
            if (id) return await cates.where('_id').equals(id)
            if(name){
                cates.where({"name" : new RegExp(name , "i")})
            }
            if(sub_categories){
                cates.where("sub_categories").in(sub_categories)
            }
            return await cates
        } catch (error) {
            return new HttpException(500 , "failed to get resource")
        }
    }
    
    public createCategory = async (data:categoryDataType)=>{
        try {
            const category = await this.model.create({
                name:data.name,
                icon:data.icon,
                img:data.img,
                sub_categories:data.sub_categories,
            })

            return category 
        } catch (error) {            
            return new HttpException(500 , "failed to create resource")
        }
    }

    public UpdateCategories = async ({icon , img , name , sub_categories} : categoryDataType , id?: typeof SchemaTypes.ObjectId) => {
        try {
            const cates =  await this.model.findById(id)
            if(!cates) return new HttpException(500 , "failed to get resource")
            if(name){
                cates.name = name
            }
            if(sub_categories){
                    cates.sub_categories?.push(...sub_categories)
            }
            if(icon){
                    cates.icon = icon
            }
            if(img){
                    cates.img = img
            }
            return await cates.save()
        } catch (error) {
            return new HttpException(500 , "failed to get resource")
        }
    }
}