import { Router , Request , Response , NextFunction  } from "express";
import ControllerInterface from "../../utils/interfaces/ControllersInterface";
import UserService from "../services/UserServices";
import ValidationMiddleWare from "../../middlewares/ValidationMiddleWare";
import { registerUserValidation } from "../../utils/validators/UserValidation";
import HttpException from "../../utils/exceptions/HttpException";
import AuthUserMiddleWare from "../../middlewares/authenticatedUserMiddleWare";

class UserController implements ControllerInterface {
    path = "/users";
    router = Router()
    service = new UserService()

    constructor(){
        this.initRoutes()
    }
    
    private initRoutes(){
        this.router.post(
        `${this.path}/register`,
        ValidationMiddleWare(registerUserValidation),
        this.register)

        this.router.post(
        `${this.path}/login`,
        ValidationMiddleWare(registerUserValidation),
        this.login)

        this.router.get(
        `${this.path}/`,
        AuthUserMiddleWare,
        this.getUser)
    }

    private register = async (req:Request , res:Response , next:NextFunction): Promise<Response|void> => {
        try {
            const {email , first_name , last_name , password , phone , role , username} = req.body
            const userdata = await this.service.register({email , first_name , last_name , password , phone , role , username}) 
            res.status(201).json(userdata)
        }catch (error) {
            next(new HttpException(400 , "failed to register user"))
        }
    }

    private login = async (req:Request , res:Response , next : NextFunction): Promise<Response|void> =>{
        try {
            const {username , password } = req.body
            const user = await this.service.login({username , password })
            res.status(200).json(user)
        } catch (error) {
            next(new HttpException(400 , "failed to login user"))
        }
    }

    private getUser = async (req:Request , res:Response , next : NextFunction): Promise<Response|void>=>{
        try {
            if(!req.user){
                return next(new HttpException(400 , "not logedin user"))
            }
            res.status(200).json({user : req.user})
        } catch (error) {
            return next(new HttpException(400 , "not logedin user"))
            
        }
    }
}



export default UserController