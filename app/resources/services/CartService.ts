import HttpException from "@/utils/exceptions/HttpException";
import CartModel from "@/resources/models/CartModel";
import { SchemaTypes } from "mongoose";

export default class CartService {
    private model = CartModel

    /***
     * add or create a new item to the cart
     */
    public addToCart = async (price: number, product: typeof SchemaTypes.ObjectId,user?: typeof SchemaTypes.ObjectId) => {
        try {
            const cart = await this.model.findOne({"ordered" :false , "_id" : user})


            if (!cart) {
                const new_cart = await this.model.create({
                    user: user,
                    products: [{
                        item: product,
                        unit_price: price
                    }]
                })
                return new_cart
            }
            cart.products.map((instance)=>{
                if(instance.item === product){
                    instance.quantity ++
                }
                cart.products.push({
                    quantity: 1,
                    item: product,
                    unit_price: price
                })
            })
            return await cart.save()
        } catch (error) {
            return new HttpException(400, "failed to add to cart")
        }
    }

    public removeFromCart = async (
        product: typeof SchemaTypes.ObjectId,
        id?: typeof SchemaTypes.ObjectId,
    ) => {
        try {
            const cart = await this.model.findById(id)
            if (!cart) return new HttpException(400, "no product found")
            cart.products.map((element, index) => {
                if (element.item == product) {
                    cart.products.splice(index, 1)
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
    public incOrDecItemInCart = async (
        increment: boolean, product: typeof SchemaTypes.ObjectId, id?: typeof SchemaTypes.ObjectId) => {
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
                            if(element.quantity > 1){
                                element.quantity--
                            }
                            break;
                    }
                }
            })
            return await cart.save()
        } catch (error) {
            return new HttpException(400, "resource not found")
        }
    }


    /**
     * marked a cart as order 
     *
     */
    public markedAsOrder = async (id: typeof SchemaTypes.ObjectId) => {
        try {
            const cart = await this.model.findById(id)
            if (!cart) return new HttpException(400, "no product found")
            cart.ordered = true
            return await cart.save()
        } catch (error) {
            return new HttpException(400, "resource not found")
        }
    }
}