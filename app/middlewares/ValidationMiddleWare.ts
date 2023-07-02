import { Request , Response , NextFunction , RequestHandler } from "express";
import joi from "joi"

const ValidationMiddleWare  = ( schema : joi.Schema) : RequestHandler=>{
    return async( req:Request, res:Response, next:NextFunction ):Promise<void> =>
    {
        const ValidationOptions = {
            aborEarly:true,
            allowUnknown:true,
            stripUnknown:true,
        }

        try {
            const values =  await schema.validateAsync(
                req.body,
                ValidationOptions
            )
            req.body = values
            next()
        } catch (e :any) {
            const errors  : string[] = []
            e.details.forEach((error :joi.ValidationErrorItem) => errors.push(error.message)); 
            res.status(400)
            .send({errors })
        }
    }
}


export default ValidationMiddleWare