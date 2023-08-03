import ControllerI from "@/utils/interfaces/ControllersInterface";
import { NextFunction, Request, Response, Router } from "express";
import CartService from "@/resources/services/CartService";
import { SchemaTypes } from "mongoose";
import ValidationMiddleWare from "@/middleware/ValidationMiddleWare";
import {  createCartValidation, incOrDecCartItemValidation, updateCartValidation } from "@/utils/validators/CartValidations";
import AuthUserMiddleWare from "@/middleware/authenticatedUserMiddleWare";

export default class CartController implements ControllerI {
    path = "/cart";
    router = Router();
    service = new CartService();

    constructor(){
        this.initRoutes();
    }

    private initRoutes = () =>{
        this.router.post(`${this.path}` ,
        [AuthUserMiddleWare,ValidationMiddleWare(createCartValidation)],this.addToCart)

        this.router.put(`${this.path}/:id` ,
        [AuthUserMiddleWare,ValidationMiddleWare(updateCartValidation)],this.removeFromCart)

        this.router.put(`${this.path}/:id/product_num` ,
        [AuthUserMiddleWare,ValidationMiddleWare(incOrDecCartItemValidation)],this.incOrDecItemInCart)

        this.router.put(`${this.path}/:id/product_num` ,
        [AuthUserMiddleWare,ValidationMiddleWare(updateCartValidation)],this.markedAsOrder)
    }

    
    private addToCart = async (req:Request, res:Response , next:NextFunction )=>{
        try {
            const price :number = req.body.price
            const product  = req.body.product as unknown as typeof SchemaTypes.ObjectId
            const user = req.user
            const cartItems = await this.service.addToCart(price , product , user.id)
            res.json(cartItems) 
            
        } catch (error) {
            return next(error)
        }
    }
    
    private removeFromCart = async (req:Request, res:Response , next:NextFunction )=>{
        try {
            const product  = req.body.product as unknown as typeof SchemaTypes.ObjectId
            const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
            const cartItems = await this.service.removeFromCart(product ,id)
            res.json(cartItems) 
            
        } catch (error) {
            return next(error)
        }
    }

    private incOrDecItemInCart = async (req:Request, res:Response , next:NextFunction )=>{
        try {
            const {increment , product  }  = req.body
            const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
            const cartItems = await this.service.addToCart(increment,product , id)
            res.json(cartItems) 
        } catch (error) {
            return next(error)
        }
    }

    private markedAsOrder = async (req:Request, res:Response , next:NextFunction )=>{
        try {
            const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
            const cartItems = await this.service.markedAsOrder(id)
            res.json(cartItems) 
        } catch (error) {
            return next(error)
        }
    }

}