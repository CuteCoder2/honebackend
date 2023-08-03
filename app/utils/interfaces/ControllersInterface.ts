import {Router} from "express"

interface ControllerI {
    path:string,
    router:Router,
    service : any,

}

export default ControllerI