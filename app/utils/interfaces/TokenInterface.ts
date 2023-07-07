import  {Schema} from "mongoose"

interface TokenI extends Object {
    id:Schema.Types.ObjectId,
    expired : number
}

export default TokenI