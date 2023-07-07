import {  model } from "mongoose";
import ModelsNames from "../../helpers/models/Name";
import CartSchema from "../../utils/schema/CartSchema";

const Cart = model(ModelsNames.cart , CartSchema)

export default Cart