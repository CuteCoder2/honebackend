import { SchemaTypes } from "mongoose";
import HttpException from "@/utils/exceptions/HttpException";
import BrandModel from "@/resources/models/BrandModel";
import { BrandType } from "@/helpers/types/services/BrandServiceTypes";

export default class BrandService {
    private model = BrandModel

    /**
     * 
     * @param brand 
     * @type {name:string , image:string})
     * @returns 
     */
    public async newBrand(brand: BrandType) {
        try {
            return await this.model.create({ ...brand })
        } catch (error) {
            return new HttpException(500, "not found")
        }
    }

    public async allBrand() {
        try {
            return this.model.find()
        } catch (error) {
            return new HttpException(500, "resource not found")
        }
    }

    
    public async updateBrand(id: typeof SchemaTypes.ObjectId, data:BrandType) {
        try {
            const brand = await this.model.findById(id)
            if (!brand) return new HttpException(404, "resource not found")
            if (data.name) {
                brand.name = data?.name
            }
            if (data.image) {
                brand.image = data.image
            }
            return brand.save()
            
        } catch (error) {
            return new HttpException(500, "resource not found")
        }
    }

    public async delete(id:typeof SchemaTypes.ObjectId){
        try{
            return await this.model.deleteOne({_id:id})
        }catch(error){
            return new HttpException(400 , "resource not found")
        }
    }
    
}
