import ControllerI from "@/utils/interfaces/ControllersInterface";
import { Router, Request, Response } from "express"
import ProductServices from "@/resources/services/ProductService"
import ValidationMiddleWare from "@/middleware/ValidationMiddleWare";
import { NewProductValidation, filterProductValidation, updateProductValidation } from "@/utils/validators/ProductValidation";
import { SchemaTypes } from "mongoose";

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
        const { brand , cat , colors , cost , full_desc , image , images , list_desc , name , selling , short_desc , stock , store , sub_cat  } = req.body
        const product = await this.service.newProduct({ brand , cat , colors , cost , full_desc , image , images , list_desc , name , selling , short_desc , stock , store , sub_cat  })
        res.status(201).json(product)
    }
    
    private  getProducts = async (req: Request, res: Response) =>{
        const data = req.body
        const { brand, cat, cost, limit, name, selling, skip} = req.body
        const products = await this.service.filterProduct({ brand, cat, cost, limit, name, selling, skip})
        res.status(200).json(products)
    }

    private async updateProduct(req: Request, res: Response) {
        const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
        const { brand , cat , colors , cost , full_desc , image , images , list_desc , name , selling , short_desc , stock , store , sub_cat  } = req.body
        const product = await this.service.updateProduct(id, { brand , cat , colors , cost , full_desc , image , images , list_desc , name , selling , short_desc , stock , store , sub_cat  })
        res.status(202).json(product)
    }

    private delete = async (req:Request , res:Response)=>{
        const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
        const info = await this.service.delete(id)
        res.status(200).json({"msg":"resource deleted successfully",info:info})
    }
}