import { Router } from "express";

const productRouts = Router()

productRouts.route('/')
productRouts.get('/' , (req , res) =>{
    res.json({'data' : "here are all the products you asked for"})
})

export default productRouts