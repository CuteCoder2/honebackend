import ControllerI from "@/utils/interfaces/ControllersInterface";
import { Router, Request, Response } from "express"
import ProductServices from "@/resources/services/ProductService"
import ValidationMiddleWare from "@/middleware/ValidationMiddleWare";
import { NewProductValidation, filterProductValidation, updateProductValidation } from "@/utils/validators/ProductValidation";
import { SchemaTypes } from "mongoose";
import { deleteDataValidation } from "@/middleware/Models.common"

export default class ProductController implements ControllerI {
    path = "/products"
    router = Router()
    service = new ProductServices()

    constructor() {
        this.initRoutes()
    }

    private initRoutes() {
        
        this.router.post(`${this.path}`,
            ValidationMiddleWare(NewProductValidation),
            this.create
        )
        
        this.router.get(`${this.path}`,
            ValidationMiddleWare(filterProductValidation),
            this.getProducts
        )

        this.router.put(`${this.path}/:id`,
            ValidationMiddleWare(updateProductValidation),
            this.updateProduct
        )
       
        this.router.delete(`${this.path}/:id` ,
        this.delete)
    }


    private  create = async (req: Request, res: Response) => {
        const { name, cost, selling, brand, image, images, description, category, type } = req.body
        const product = await this.service.newProduct({ name, cost, selling, brand, image, images, description, category, type })
        res.status(201).json(product)
    }
    
    private  getProducts = async (req: Request, res: Response) =>{
        const data = req.body
        const { brand, category, cost, limit, name, selling, skip, type } = req.body
        const products = await this.service.filterProduct({ brand, category, cost, limit, name, selling, skip, type })
        res.status(200).json(products)
    }

    private async updateProduct(req: Request, res: Response) {
        const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
        const { brand, category, cost, description, image, images, name, selling, type } = req.body
        const product = await this.service.updateProduct(id, { brand, category, cost, description, image, images, name, selling, type })
        res.status(202).json(product)
    }

    private delete = async (req:Request , res:Response)=>{
        const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
        const info = await this.service.delete(id)
        res.status(200).json({"msg":"resource deleted successfully",info:info})
    }
}