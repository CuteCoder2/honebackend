import {Router , Request , Response , NextFunction} from "express"
import HttpException from "../../utils/exceptions/HttpException"
import ValidationMiddleware from "../../middlewares/ValidationMiddleWare"
import Validate from "../../utils/validators/PostValidator"
import PostService from "../services/PostService"
import data from "../../data"
import ControllersInterface from "../../utils/interfaces/ControllersInterface"


export default class PostController implements ControllersInterface {

    path = "/post"
    router = Router()
    service = new PostService()
    
    constructor(){
        this.initRoutes();
    }

    private initRoutes(){
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

}
