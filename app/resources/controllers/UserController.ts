import { Router , Request , Response , NextFunction  } from "express";
import ControllerInterface from "@/utils/interfaces/ControllersInterface";
import UserService from "@/resources/services/UserServices";
import ValidationMiddleWare from "@/middleware/ValidationMiddleWare";
import { loginUserValidation, registerUserValidation } from "@/utils/validators/UserValidation";
import HttpException from "@/utils/exceptions/HttpException";
import AuthUserMiddleWare from "@/middleware/authenticatedUserMiddleWare";
import { RegisterUserUniqueFieldValidation } from "@/middleware/UserMiddleWares";

class UserController implements ControllerInterface {

    path = "/users";
    router = Router()
    service = new UserService()

    constructor(){
        this.initRoutes()
    }
    
    private initRoutes(){
        this.router
        .post(
        `${this.path}/register`,
        [ValidationMiddleWare(registerUserValidation) , RegisterUserUniqueFieldValidation],
        this.register)

        this.router.post(
        `${this.path}/login`,
        ValidationMiddleWare(loginUserValidation),
        this.login)

        this.router.get(
        `${this.path}/`,
        AuthUserMiddleWare,
        this.getUser)
        }

    private register = async (req:Request , res:Response , next:NextFunction) => {
        try {
            const {dob , email , first_name , last_name , password , phone , pob ,store , username} = req.body
            const user_data = await this.service.register({dob , email , first_name , last_name , password , phone , pob , store , username}) 
            res.status(201).json(user_data)
        }catch (error) {
            return next(new HttpException(400 , "failed to register user"))
        }
    }

    private login = async (req:Request , res:Response , next : NextFunction): Promise<Response|void> =>{
        try {
            const {username , password } = req.body
            const user = await this.service.login({username , password })
            res.status(200).json(user)
        } catch (error) {
           return  next(new HttpException(400 , "failed to login user"))
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