import {  model } from "mongoose";
import ModelsNames from "@/helpers/models/name";
import CartSchema from "@/utils/schema/CartSchema";

const CartModel = model(ModelsNames.cart , CartSchema)

export default CartModel