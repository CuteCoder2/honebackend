import ControllerI from "@/utils/interfaces/ControllersInterface";
import { NextFunction, Request,Response, Router } from "express";
import OrderService from "../services/OrderService";
import AuthUserMiddleWare from "@/middleware/authenticatedUserMiddleWare";
import ValidationMiddleWare from "@/middleware/ValidationMiddleWare";
import { addOrderValidationSchema, updateOrderValidationSchema } from "@/utils/validators/OrderValidations";

export default class OrderController implements ControllerI {
    path = "/order";
    router = Router();
    service = new OrderService();

    constructor() {
        this.initRoutes()
    }

    private initRoutes = () => {

        this.router.post(`${this.path}`, [AuthUserMiddleWare, ValidationMiddleWare(addOrderValidationSchema),],
            this.makeNewOder)

    }

    private makeNewOder = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cart_id = req.body.cart_id
            const user_id = req.user.id
            const order = await this.service.newOder(cart_id, user_id)
            res.json()
        } catch (error) {
            return next(error)
        }
    }

    private filterOrders = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            return next(error)
        }
    }

    private userOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            return next(error)
        }
    }

    private requestCancelOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            return next(error)
        }
    }

    private CancelOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            return next(error)
        }
    }

}