import SubCategoryI from "@/utils/interfaces/SubCat"
import { Schema } from "mongoose"

const SubCategorySchema = new Schema<SubCategoryI>({
    name: { 
        type: String, 
        required: true
     },
    icon: { 
        type: String, 
        required: true
     },
    img: { 
        type: String, 
        required: true
     }
})

export default SubCategorySchema