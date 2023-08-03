import "module-alias/register"
import {configDotenv} from  "dotenv"
import App from "@/App"
import AddressController from "@/resources/controllers/AddressController"
import BrandController from "@/resources/controllers/BrandController"
import CartController from "@/resources/controllers/CartController"
import CategoryController from "@/resources/controllers/CategoryController"
import PostController from "@/resources/controllers/PostControllers"
import ProductController from "@/resources/controllers/ProductController"
import UserController from "@/resources/controllers/UserController"
import EmployeeController from "./resources/controllers/EmployeeController"
import "@/i18n"
configDotenv()


const app = new App(
[
    new PostController(),
    new UserController() , 
    new BrandController(),
    new ProductController(),
    new AddressController(),
    new CartController(),
    new CategoryController(),
    new EmployeeController(),
] , 
Number(process.env.PORT),
process.env.MONGO_DEV_URL as string
)

app.listen()

// conda install -c conda-forge markdown 
// django-rest-auth django-filter