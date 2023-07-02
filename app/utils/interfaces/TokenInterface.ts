import  {Schema} from "mongoose"

interface TokenInterface extends Object {
    id:Schema.Types.ObjectId,
    expired : number
}

export default TokenInterface