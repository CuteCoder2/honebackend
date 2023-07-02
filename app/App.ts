import path from "path"
import express, { Application } from "express";
import compression from "compression"
import cors from "cors"
import morgan from "morgan"
import Controller from "./utils/interfaces/ControllersInterface"
import ErrorMiddleWare from "./middlewares/errorInterface"
import helmet from "helmet"
import DbConnection from "./db/connection";
import ValidateDotEnv from "./utils/validators/validateEnv";

class App {
    public express: Application
    public port: number
    private mongoose_url : string

    constructor(controllers: Controller[], port: number , mongoose_url :string) {
        ValidateDotEnv()
        this.express = express()
        this.port = port
        this.mongoose_url = mongoose_url
        this.initDbConnection()
        this.initMiddleWares()
        this.initControllers(controllers)
        this.initErrorHandling()
    }

    private initMiddleWares(): void {
        this.express.use(helmet())
        this.express.use(morgan("dev"))
        this.express.use(cors())
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: false }))
        this.express.use('/' , express.static(path.join(__dirname , '..' , "app/build")))
        this.express.use(compression())
    }


    private initControllers(controllers: Controller[]): void {
        controllers.map((controller: Controller) => {
            // this.express.use("/api", controller.router)
            this.express.use("/", controller.router)
        })
    }

    private initErrorHandling() {
        this.express.use(ErrorMiddleWare)
    }

    private async initDbConnection() {
        return new DbConnection(this.mongoose_url)
    }

    public listen() {
        this.express.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        })
    }
}

export default App