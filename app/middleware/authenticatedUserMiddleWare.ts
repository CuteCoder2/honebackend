import { Response , Request , NextFunction , RequestHandler } from "express";
import UserModel from "@/resources/models/UserModel";
import { verifyToken  } from "@/utils/token/Token";
import TokenInterface from "@/utils/interfaces/TokenInterface";
import HttpException from "@/utils/exceptions/HttpException";
import  Jwt  from "jsonwebtoken";

const AuthUserMiddleWare  = async (req:Request , res:Response, next:NextFunction) : Promise<Response |void> =>{
    const bearerToken = req.headers.authorization
    if (!bearerToken || !bearerToken.startsWith('Bearer')) {
        return next(new HttpException(4001 , 'unauthorized action'))
    }
    const accessToken = bearerToken.split('Bearer ')[1].trim()
    try {
        const payload :TokenInterface|Jwt.JsonWebTokenError = await verifyToken(accessToken)
        if(payload instanceof Jwt.JsonWebTokenError){
            return res.status(401).json({msg:"unauthorized action"})
        }
        const user = await UserModel.findById(payload.id)
        .select('-password')
        .exec()

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