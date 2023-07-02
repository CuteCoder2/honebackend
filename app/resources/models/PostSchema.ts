import { Schema, model } from "mongoose"
import ModelsNames from "../../helpers/models/Name"
import PostsInterface from "../../helpers/types/models/PostsInterface"

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
)

export default model<PostsInterface>(ModelsNames.post , PostSchema)