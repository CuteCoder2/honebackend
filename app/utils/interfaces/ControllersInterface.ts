import {Router} from "express"

interface ControllerInterface {
    path:string,
    router:Router,
    service : any,
}

export default ControllerInterface