import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import {Routes, Route, useSearchParams, useLocation} from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";
import BlogPage from "./Pages/BlogPage";



export default function App() {
  const {fetchBlogPost} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( ()=> {

    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")) {
      // it means to show tag page
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page), tag);

    }

    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number, category);
    }

    else {
      fetchBlogPost(Number(page));
    }

  },[location.pathname, location.search])

  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
}
