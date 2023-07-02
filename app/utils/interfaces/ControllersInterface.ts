import {Router} from "express"

interface ControllerInterface {
    path:string,
    router:Router,
    service : any,

    // private initRoutes(): void
}

export default ControllerInterface