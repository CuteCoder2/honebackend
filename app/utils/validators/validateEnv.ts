import {cleanEnv , str , port  } from "envalid"

const ValidateDotEnv = ()=>{
    cleanEnv(process.env , {
        NODE_ENV : str({
            choices:['dev' , 'prod']
        }),
        MONGO_PASSWORD : str(),
        MONGO_PATH:str(),
        MONGO_USER:str(),
        PORT :port({default:3000})
    })
    
}

export default ValidateDotEnv