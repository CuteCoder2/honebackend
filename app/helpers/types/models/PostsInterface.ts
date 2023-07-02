import { Document } from "mongoose"

export default interface PostsInterface extends Document{
    title : string,
    body : string
}