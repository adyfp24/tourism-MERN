import { useState } from "react"
import useAuth from "./useAuth"
import { getAllService } from "../services/blogService";

const useBlog = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [blog, setBlog] = useState([])

    const getAllBlog = async () => {
        setLoading(true);
        setError(null)
        try {
            const allBlog = await getAllService()
            setBlog(allBlog)
        } catch (error) {
            setError(error.response ? error.response.data : 'get all blog failed')
        } finally {
            setLoading(false)
        }
    }

    const getBlogById = async () => {

    }

    const createBlog =  async () => {

    }

    useEffect(() => {
        getAllBlog();
    }, []);

    return {loading, error, blog, getAllBlog, getBlogById, createBlog}
}

export default useBlog