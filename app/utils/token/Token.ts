import jwt from "jsonwebtoken"
import UserInterface from "../interfaces/UserInterface"
import TokenInterface from "../interfaces/TokenInterface"

export const  createToken = (user:UserInterface): string =>{
    return jwt.sign(
        {id:user._id },
        process.env.JWT_SECRETE as jwt.Secret ,
        { expiresIn : "1d"}
        )
}

export const verifyToken = async (token : string) : Promise<jwt.VerifyErrors | TokenInterface>=>{
    return new Promise((resolve , reject)=>{
        jwt.verify(token , process.env.JWT_SECRETE as jwt.Secret , (error , payload )=>{
            if(error) return reject(error)
            resolve(payload as TokenInterface)
        })
    })
}

export default {createToken , verifyToken}