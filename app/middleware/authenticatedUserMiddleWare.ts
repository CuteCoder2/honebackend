import { Response , Request , NextFunction } from "express";
import UserModel from "@/resources/models/UserModel";
import HttpException from "@/utils/exceptions/HttpException";
import  Jwt  from "jsonwebtoken";
import { TokenI } from "@/utils/interfaces/TokenInterface";
import { verifyToken } from "@/utils/token/Token";

const AuthUserMiddleWare  = async (req:Request , res:Response, next:NextFunction) : Promise<Response |void> =>{
    const bearerToken = req.headers.authorization
    if (!bearerToken || !bearerToken.startsWith('Bearer')) {
        return next(new HttpException(4001 , 'unauthorized action'))
    }
    const accessToken = bearerToken.split('Bearer ')[1].trim()
    try {
        const payload :TokenI|Jwt.JsonWebTokenError = await verifyToken(accessToken)
        if(payload instanceof Jwt.JsonWebTokenError){
            return res.status(401).json({msg:"unauthorized action"})
        }
        const user = await UserModel.findById(payload.id)
        .select('-password')
        

        if(!user){
            return next(new HttpException(4001 , 'unauthorized action'))
        }
        
        req.user = user
        next()
    } catch (error) {
        return next(new HttpException(4001 , 'unauthorized action'))
    }    

}

export default AuthUserMiddleWare