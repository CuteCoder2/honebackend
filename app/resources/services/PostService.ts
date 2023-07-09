import PostModel from "@/resources/models/PostSchema"
import PostsInterface from "@/helpers/types/models/PostsInterface"

class PostService {
    private model = PostModel


    /**
     * create a new post 
     */
    public async create(title:string , body:string):Promise<PostsInterface>
    {
        try {
            const post = await this.model.create({title , body})
            return post
        } catch (error) {
           throw new Error('unable to create post') 
        } 
    }
}

export default PostService