import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";


export const PostIdPages = () => {
    const params = useParams();
    console.log(params);
    
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const res = await PostService.getById(params.id)
        setPost(res.data)
    })

    const [fetchComments, isComLoading, ComError] = useFetching(async () => {
        const res = await PostService.getCommentsByPostId(params.id)
        setComments(res.data)
    })
   
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

return (
    <div>
        <h2>You open page post for ID = {params.id}</h2>
        {isLoading
            ? <Loader/>
            :  <div>{post.id} {post.title }</div>
        } 
        <h2>Comments</h2>
        {isComLoading
            ? <Loader/>
            : <div>
                {comments.map(com =>
                    <div style={{marginTop: 15}}>
                        <h5>{com.email}</h5>
                        <div>{com.body }</div>
                    </div>
                 )}
            </div>
        }
    </div>
)
};

export default PostIdPages;