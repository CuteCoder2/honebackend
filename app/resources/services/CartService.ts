import HttpException from "@/utils/exceptions/HttpException";
import CartModel from "../models/CartModel";
import { SchemaTypes } from "mongoose";

export default class CartService {
    private model = CartModel

    /***
     * add or create a new item to the cart
     */
    private addToCart = async (
        price: number,
        product: typeof SchemaTypes.ObjectId,
        id?: typeof SchemaTypes.ObjectId,
        user?: typeof SchemaTypes.ObjectId
    ) => {
        try {
            if (!id) {
                const cart = await this.model.create({
                    user: user,
                    products: [{
                        item: product,
                        unit_price: price
                    }]
                })
                return cart
            }
            const cart = await this.model.findById(id)
            if (!cart) return new HttpException(400, "no product found")
            cart.products.push({
                quantity: 1,
                item: product,
                unit_price: price
            })
            await cart.save()
            return cart
        } catch (error) {
            return new HttpException(400, "failed to add to cart")
        }
    }

    private removeItem = async (
        product: typeof SchemaTypes.ObjectId,
        id?: typeof SchemaTypes.ObjectId,
    )=>{
        try {
            const cart = await this.model.findById(id)
            if (!cart) return new HttpException(400, "no product found")
            cart.products.map((element , index)=>{
                if (element.item == product){
                    // cart.products.
                }
            })
            return await cart.save()
        } catch (error) {
            return new HttpException(400, "failed to add to cart")
        }
    }

    /**
     * increment or decrement cart item quantity
     */
    private addOrDecCartItem = async (
        increment: boolean,
        product: typeof SchemaTypes.ObjectId,
        id?: typeof SchemaTypes.ObjectId) => {
        try {
            const cart = await this.model.findById(id)
            if (!cart) return new HttpException(400, "no product found")
            cart.products.map((element) => {
                if (element.item == product) {
                    switch (increment) {
                        case true:
                            element.quantity++
                            break;
                        case false:
                            element.quantity--
                            break;
                    }
                }
            })
            return await cart.save()
        } catch (error) {
            return new HttpException(400, "resource not found")
        }
    }
}