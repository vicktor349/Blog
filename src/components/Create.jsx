import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'


const Create = () => {
    const [title, setTitle] =useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blogs = {title, body, author}

        setIsPending(true);

       fetch('http://localhost:8000/blogs', {
           method: 'POST',
           headers: {'Content-type': 'application/json'},
           body: JSON.stringify(blogs)
       }).then(() =>{
           setIsPending(false)
           history.push('/')
       })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author: </label>
                <input type="text"  value={author} onChange={(e) => setAuthor(e.target.value)} />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;