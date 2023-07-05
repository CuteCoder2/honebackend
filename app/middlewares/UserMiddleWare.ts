import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/exceptions/HttpException";
import UserModel from "../resources/models/UserModel";


/**
 * user unique filed are "username" , "email"
 * @param req  
 * @param res 
 * @param next 
 */
export const RegisterUserUniqueFieldValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, username } = req.body
        const userEmail = await UserModel.findOne({ email: email })
        const userUserName = await UserModel.findOne({ username: username })
        if (userEmail) return res.status(500).json({"msg":"email taken, try different email address"})
        if (userUserName) return res.status(500).json({"msg":"username taken, try different username"})
        next()
    } catch (error) {
        return  new HttpException(500, "unable to handle request")
    }
}