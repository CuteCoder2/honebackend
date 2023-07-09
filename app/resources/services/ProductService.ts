import { SchemaTypes } from "mongoose";
import HttpException from "@/utils/exceptions/HttpException";
import Errors from "@/utils/messages/errors";
import { ProductModel } from "@/resources/models/ProductModel";
import { ProductDataTypes, filterProductPropsType, updateProductDatatype } from "@/helpers/types/services/ProductTypes"

export default class ProductService {
    private model = ProductModel

    public async newProduct(data: ProductDataTypes) {
        try {
            const { brand, category, cost, description, image, images, name, selling, type } = data
            return await this.model.create({
                "brand": brand,
                "category": [...category],
                "description": description,
                "image": image,
                "images": [...images],
                "name": name,
                "type": type,
                "price.cost": cost,
                "price.selling": selling
            })
        } catch (error) {
            console.log(error)
            return new HttpException(400, Errors.rnotfound)
        }
    }

    public async filterProduct(data: filterProductPropsType) {
        try {
            const products = this.model.find({})
            if (data.brand) {
                products.where("brand").equals(data.brand)
            }
            if (data.category) {
                products.where("category").equals(data.category)
            }

            if (data.cost) {
                products.where("price.cost").equals(data.cost)
            }

            if (data.selling) {
                products.where("price.selling").equals(data.selling)
            }

            if (data.type) {
                products.where("type").equals(data.type)
            }

            if (data.name) {
                products.where({ name: new RegExp(data.name, "i") })
            }

            const product_data = await products.limit(data.limit).skip(data.skip)
            return {
                products: product_data,
                // total : num,
                limit: data.limit,
                nextPage: (data.skip + 1)
            }
        } catch (error) {
            return new HttpException(400, Errors.rnotfound)
        }
    }

    public async updateProduct(id: typeof SchemaTypes.ObjectId, data: updateProductDatatype) {
        try {
            const { brand, category, cost, description, image, images, name, selling, type } = data
            const product = await this.model.findById(id)
            if (!product) return new HttpException(404, "resource not found")
            if (brand) {
                product.brand = brand
            }
            if (category) {
                product.category.push(category)
            }
            if (cost) {
                product.price.cost = cost
            }
            if (selling) {
                product.price.selling = selling
            }
            if (description) {
                product.description = description
            }
            if (image) {
                product.image = image
            }
            if (images) {
                product.images.push(images)
            }
            if (name) {
                product.name = name
            }
            if (type) {
                product.type = type
            }
            return await product.save()
        } catch (error) {
            return new HttpException(400, Errors.rnotfound)
        }
    }

    public async delete(id: typeof SchemaTypes.ObjectId){
        try{
            const data =  await this.model.deleteOne({_id:id})
            return data
        }catch(error){
            return new HttpException(400 , "resource not found")
        }
    }
}