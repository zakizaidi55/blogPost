import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"
import BlogDetails from './BlogDetails';

const Blogs = () => {
    // consume the context
    const {posts,loading} = useContext(AppContext);
    //console.log("Printing iside blog component");
    // console.log(posts);
  return (
    <div className='w-11/12 max-w-[640px] py-3 flex flex-col gap-y-8 mt-[69px] mb-[50px]'>
       {
        loading ? 

        (<Spinner/>) : 
        (
            posts.length === 0 ? (<div>
                No Post found</div>)
                :  (posts.map ( (post) => (
                   <BlogDetails key={post.id} post = {post}/>
                )))
        ) 
       }
    </div>
  )
}

export default Blogs
