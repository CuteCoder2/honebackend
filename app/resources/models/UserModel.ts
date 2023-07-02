import { model } from "mongoose";
import ModelsNames from "../../helpers/models/Name";
import UserSchema from "../../utils/schema/UserSchema";


const UserModel = model(ModelsNames.user, UserSchema)

export default UserModel