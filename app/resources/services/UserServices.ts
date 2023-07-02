import { registerUserdataType, loginUserDataType, RegUserDataType } from "../../helpers/types/services/UserServicesType";
import Token from "../../utils/token/Token";
import UserModel from "../models/UserModel";

class UserService {
    private user = UserModel

    public async register(data: registerUserdataType) {
        try {
            const user = await this.user.create({
                email: data.email,
                name: { first_name: data.first_name, last_name: data.last_name },
                password: data.password,
                phone: data.phone,
                username: data.username
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
            const user = await this.user.findOne({ username: data.username })
            if (user?.isValidPassword(data.password)) {
                const token = Token.createToken(user)
                const user_data = {
                    token: token,
                    user: user
                }
                return user_data
            }
            return new Error('password incorrect')
        } catch (error) {
            throw new Error("user not found")

        }
    }
}

export default UserService