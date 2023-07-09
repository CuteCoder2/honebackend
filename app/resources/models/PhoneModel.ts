import ModelsNames from "@/helpers/models/name";
import PhoneI from "@/utils/interfaces/phoneInterface";
import phoneSchema from "@/utils/schema/PhoneSchema";
import { model } from "mongoose";

export const  PhoneModel = model(ModelsNames.phone ,phoneSchema )