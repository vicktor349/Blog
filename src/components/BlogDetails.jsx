import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import '../App.css';

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, error,isLoading} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/')
        })
    }


    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <div className="delete-button">
                        <button onClick={handleDelete} style ={{padding: "10px 30px", fontSize: "15px"}}>Delete Blog</button>
                    </div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;