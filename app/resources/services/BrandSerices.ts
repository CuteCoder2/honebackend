import HttpException from "../../utils/exceptions/HttpException";
import BrandModel from "../models/BrandModel";

class Brandservice  {
    private model = BrandModel

    /**
     * 
     * @param brand 
     * @type {name:string , image:string})
     * @returns 
     */
    public async newBrand(brand:{name:string , image:string}){
        try {
            return  await this.model.create({...brand})
        } catch (error) {
            return new HttpException(500 , "not found" )
        }
    }
    
    public async allBrand(){
        try {
            this.model.find({})
        } catch (error) {
            return new HttpException(500 , "resource not found" )
        }
    }
}