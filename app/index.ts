import "module-alias/register"
import {configDotenv} from  "dotenv"
import App from "@/App"
import PostController from "@/resources/controllers/PostControllers"
import UserController from "@/resources/controllers/UserController"
import BrandController from "@/resources/controllers/BrandController"
import ProductController from "@/resources/controllers/ProductController"

configDotenv()

const app = new App(
[
    new PostController(),
    new UserController() , 
    new BrandController(),
    new ProductController()
] , 
Number(process.env.PORT),
process.env.MONGO_DEV_URL as string
)

app.listen()

// conda install -c conda-forge markdown django-rest-auth django-filter