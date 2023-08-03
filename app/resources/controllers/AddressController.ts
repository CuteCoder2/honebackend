import ControllerI from "@/utils/interfaces/ControllersInterface";
import { Router, Response, Request , NextFunction } from "express";
import AddressService from "@/resources/services/AddressService";
import { SchemaTypes } from "mongoose";
import { addressDataType } from "@/helpers/types/models/modelsTypes";
import ValidationMiddleware from "@/middleware/ValidationMiddleWare"
import { createAddressValidationSchema, updateAddressValidationSchema } from "@/utils/validators/AddressValidations";
import AuthUserMiddleWare from "@/middleware/authenticatedUserMiddleWare";

export default class AddressController implements ControllerI {
    path = "/address";
    router = Router();
    service = new AddressService();

    constructor() {
        this.initRoutes();
    }

    private initRoutes = () => {
        this.router.post(
            `${this.path}`,
            [AuthUserMiddleWare,
                ValidationMiddleware(createAddressValidationSchema)],
            this.create)

            this.router.get(
            `${this.path}/:id`,
            [AuthUserMiddleWare],
            this.getAddress)
           
            this.router.put(
            `${this.path}/:id`,
            // [AuthUserMiddleWare , 
                ValidationMiddleware(updateAddressValidationSchema),
            this.updateAddress)
            
            this.router.get(
                `${this.path}/user/:user`,
                [AuthUserMiddleWare],
            this.allUserAddress)
    }

    private create = async (req: Request, res: Response , next:NextFunction) => {
        try {
            const { country, pobox, street, town }: addressDataType = req.body
            const user = req.user 
            const addresses = await this.service.addAddress(user.id, { country, pobox, street, town })
            return res.json(addresses)
        } catch (error) {
            return next(error)            
        }
    }

    private allUserAddress = async(req: Request, res: Response , next:NextFunction) => {
        try {
            const user = req.user 
            const addresses = await this.service.getUserAddress(user.id)
            return res.json(addresses)
        } catch (error) {
            return next(error)            
        }
    }

    private getAddress = async (req: Request, res: Response , next:NextFunction) => {
       try {
           const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
           const addresses = await this.service.getAddressByI(id)
           return res.json(addresses)
        } catch (error) {
            return next(error)
        }
    }
    
    private updateAddress = async (req: Request, res: Response , next:NextFunction) => {
       try {
        
           const { country, pobox, street, town }: addressDataType = req.body
           const id = req.params.id as unknown as typeof SchemaTypes.ObjectId
           const addresses = await this.service.updateAddress(id, { country, pobox, street, town })
           return res.json(addresses)
        } catch (error) {
         return next(error)
        }
    }

}