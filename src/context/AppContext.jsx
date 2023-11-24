import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

// create provider
export default function AppContextProvider ({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage]  =useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // data filling
    async function fetchBlogPost(page = 1, tag=null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag) {
            url += `&tag=${tag}`; 
        }
        if(category) {
            url += `&category=${category}`;
        }

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch(error) {
            console.log(error);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }

        setLoading(false);
    }


    function handlePageChange(page) {
        navigate({search:`?page=${page}`});
        setPage(page);
    }

    const values = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    };

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
}



