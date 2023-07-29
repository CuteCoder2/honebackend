import { Router, Request, Response, NextFunction } from "express"
import HttpException from "@/utils/exceptions/HttpException"
import { BrandValidation , updateBrandValidation } from "@/utils/validators/BrandValidations"
import ValidationMiddleware from "@/middleware/ValidationMiddleWare"
import BrandService from "@/resources/services/BrandService"
import ControllerI from "@/utils/interfaces/ControllersInterface"
import { SchemaTypes } from "mongoose"
import ValidationMiddleWare from "@/middleware/ValidationMiddleWare"
import { deleteDataValidation } from "@/middleware/Models.common"


export default class BrandController implements ControllerI {

    path = "/brand"
    router = Router()
    service = new BrandService()

    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post(
            `${this.path}`,
            ValidationMiddleware(BrandValidation),
            this.create)

        this.router.get(
            `${this.path}`,
            this.allBrands)

        this.router.put(
            `${this.path}/:id`,
            ValidationMiddleware(updateBrandValidation),
            this.updateBrand)

        this.router.delete(`${this.path}/:id` ,
            this.delete)
    }


    private create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const { image, name } = req.body
            const brand = await this.service.newBrand({ image, name })
            res.status(201).json(brand)
        } catch (error) {
            next(new HttpException(400, "failed to create brand"))
        }
    }

    private updateBrand = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
        const { image, name } = req.body
        const brand = await this.service.updateBrand(id, { image, name })
        res.status(200).json(brand)
    }

    private allBrands = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        const brands = await this.service.allBrand()
        res.status(200).json(brands)
    }

    private delete = async (req:Request , res:Response , next:NextFunction)=>{
        const id = req.body as unknown as typeof SchemaTypes.ObjectId
        const info = await this.service.delete(id)
        res.status(200).json({"msg":"resource deleted successfully" , info:info})
    }
}
