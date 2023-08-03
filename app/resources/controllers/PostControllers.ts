import {Router , Request , Response , NextFunction} from "express"
import HttpException from "@/utils/exceptions/HttpException"
import ValidationMiddleware from "@/middleware/ValidationMiddleWare"
import Validate from "@/utils/validators/PostValidators"
import PostService from "@/resources/services/PostService"
import data from "@/data"
import ControllerI from "@/utils/interfaces/ControllersInterface"
import DeviceDetector from "node-device-detector";
import DeviceHelper from "node-device-detector/helper";
import { __ } from "@/i18n"
import { getClientIp } from "request-ip"
const detector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false,
  });

export default class PostController implements ControllerI {

    path = "/post"
    router = Router()
    service = new PostService()
    
    constructor(){
        this.initRoutes();
    }

    private initRoutes(){
        this.router.get(
        `${this.path}`,
        this.test)

        this.router.post(
        `${this.path}`,
        ValidationMiddleware(Validate.create) , 
        this.create)

        this.router.post(`/auth/signin` ,(req , res)=>{
            res.status(200).json(data)
        })
    }
    
    private create = async (req:Request, res:Response,next:NextFunction) : Promise<Response | void> =>{
        try {
            const {title , body} = req.body
            const post = await  this.service.create(title , body)
            res.status(201)
            .json(post)
        } catch (error) {
            next(new HttpException(400 , "failed to create post"))
        }
    }

    private test = async (req:Request, res:Response,next:NextFunction) : Promise<Response | void> =>{
        try {
            const userAgent = req.get('User-Agent') as string
            const result = detector.detect(userAgent);
            res.json(__('Hello'))
        } catch (error) {
            next(new HttpException(400 , "failed to create post"))
        }
    }

}
