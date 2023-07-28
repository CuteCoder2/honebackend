import { model } from "mongoose";
import ModelsNames from "@/helpers/models/name";
import OrderSchema from "@/utils/schema/OrderSchema";

const OrderModel = model(ModelsNames.cart , OrderSchema)
export default OrderModel