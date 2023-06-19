import {Request , Response} from '@types/express'

import { ProductModel } from "../models/product"

export const createProduct = (req:Request , res:Response)=>{
    const data = req.body
    const product = ProductModel   
}