import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
  // const newBaseUrl = "https://code-help-apis.vercel.app/api"
  const [blog, setBlog] = useState("");
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const {setLoading, loading} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  
  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}get-blog?blogId=${blogId}`;

    try{
      const res = await fetch(url);
      const data = res.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlog);
    } catch {
      console.log("error while fetching the Blog id");
      setBlog(null);
      setRelatedBlog([]);
    }

    setLoading(false);
  }


  useEffect( () => {
    if(blogId) {
      fetchRelatedBlogs()
    }
  },[location.pathname]);


  return (
    <div>
      <Header/>
      <div>
        <button 
        onClick={()=> navigation(-1)}>
          back
        </button>
        
      </div>
      {
        loading ? (
          <p>loading</p>
        ) : 
        (
          <div>
          blog ? (
            <div>
              <BlogDetails post = {blog}/>
              <h2>Related Blogs</h2>
              {
                relatedBlog.map((post)=> {
                  return <div key={post.id}>
                    <BlogDetails post = {post}/>
                  </div>
                })
              }
            </div>
            ) : 
          (
            <p>No blog found</p>
          )
          </div>
        )
        
      }
    </div>
  )
}

export default BlogPage
