import { configDotenv } from "dotenv";
import express from "express";
import { PORT } from "./configs/app";
import productRouts from "./routers/apis/ProductsApis";

const app = express()

app.get('/' , (req , res)=>{
    console.log('ready to process');
    
    res.json({msg  :  "all working just fine"})
})

app.use('/products' , productRouts)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})