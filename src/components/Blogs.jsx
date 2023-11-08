import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"

const Blogs = () => {
    // consume the context
    const {posts,loading} = useContext(AppContext);
    //console.log("Printing iside blog component");
    // console.log(posts);
  return (
    <div>
       {
        loading ? 

        (<Spinner/>) : 
        (
            posts.length === 0 ? (<div>
                No Post found</div>)
                :  (posts.map ( (post) => (
                    <div key={post.id}>
                        <p className='title font-bold'>{post.title}</p>
                        <p>
                            By <span>{post.author}</span> on <span>{post.category}</span>
                        </p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div>
                            {post.tags.map((tag, index) => {
                                return <span key={index}>{` #${tag} `}</span>
                            })}
                        </div>
                    </div>
                )))
        ) 
       }
    </div>
  )
}

export default Blogs
