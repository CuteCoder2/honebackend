import ModelsNames from "@/helpers/models/name";
import PhoneAccessoryI from "@/utils/interfaces/PhoneAccessory";
import PhoneAccessorySchema from "@/utils/schema/PhoneAccessorySchema";
import { model } from "mongoose";

const PhoneAccessoryModel = model<PhoneAccessoryI>(ModelsNames.phoneacc , PhoneAccessorySchema)
export default PhoneAccessoryModel