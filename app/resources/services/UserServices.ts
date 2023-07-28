import { registerUserDataType, loginUserDataType} from "@/helpers/types/services/UserServicesType";

import Token from "@/utils/token/Token";
import UserModel from "@/resources/models/UserModel";

class UserService {
    private model = UserModel

    public async register(data: registerUserDataType) {
        try {

            const user = await this.model.create({
                email:data.email,
                name:{
                    first_name:data.first_name,
                    last_name:data.last_name,
                },
                dob:data.dob,
                pob:data.pob,
                username:data.username,
                password:data.password,
                phone:[data.phone],
            })
            
            const token = Token.createToken(user)
            const user_data = {
                token: token,
                user: user
            }
            
            return user_data
        } catch (error) {
            throw new Error("user able to register user")
        }
    }

    public async login(data: loginUserDataType) {
        try {
            const user = await this.model.findOne({ username: data.username })
            
            if(!user){
                throw new Error('no user matche the following credentials')
            }
            
            if ( await user.isValidPassword(data.password)) {
                const token = Token.createToken(user)
                const user_data = {
                    token: token,
                    user: user
                }
                return user_data
            }else{
                throw new Error('no user matche the following credentials')
            }
        } catch (error) {
            throw new Error("user not found")

        }
    }
}

export default UserService