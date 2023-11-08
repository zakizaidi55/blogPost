import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"


export default function App() {
  const {fetchBlogPost} = useContext(AppContext);

  useEffect( ()=> {
    fetchBlogPost();
  },[])
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}
