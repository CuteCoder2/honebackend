import { model } from "mongoose";
import ModelsNames from "@/helpers/models/name";
import AddressSchema from "@/utils/schema/AddressSchema";



const AddressModel = model(ModelsNames.address , AddressSchema)

export default AddressModel 