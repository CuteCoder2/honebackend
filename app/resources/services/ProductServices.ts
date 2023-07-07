import { s } from "mongoose";
import HttpException from "../../utils/exceptions/HttpException";
import ProductI from "../../utils/interfaces/productInterface";
import Errors from "../../utils/messages/errors";
import { ProductModel } from "../models/ProductModel";

export default class ProductServices {
    private model = ProductModel


    public async newProduct(data: ProductI) {
        try {
            return await this.model.create({ ...data })
        } catch (error) {
            return new HttpException(400, Errors.rnotfound)
        }
    }

    public async filterProduct(id: typeof SchemaTypes.ObjectId) {
        try {
            const product = this.model.findById(id)
            return product
        } catch (error) {
            return new HttpException(400, Errors.rnotfound)
        }
    }
}