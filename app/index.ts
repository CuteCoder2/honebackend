import {configDotenv} from  "dotenv"
import App from "./App"
import PostController from "./resources/controllers/PostControllers"
import UserController from "./resources/controllers/UserController"


configDotenv()



const app = new App(
[
    new PostController(),
    new UserController()
] , 
Number(process.env.PORT),
process.env.MONGO_DEV_URL as string
)

app.listen()