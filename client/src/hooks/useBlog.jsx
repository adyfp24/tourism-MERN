import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import { getAllService } from "../services/blogService";

const useBlog = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState(null);

    const getAllBlog = async () => {
        setLoading(true);
        setError(null)
        try {
            const allBlog = await getAllService()
            setBlogs(allBlog)
        } catch (error) {
            setError(error.response ? error.response.data : 'get all blog failed')
        } finally {
            setLoading(false)
        }
    }

    const getBlogById = async (id) => {
        setLoading(true);
        setError(null)
        try {
            const blog = await getByIdService(id)
            setBlog(blog)
        } catch (error) {
            setError(error.response ? error.response.data : 'get all blog failed')
        } finally {
            setLoading(false)
        }
    }

    const createBlog =  async () => {

    }

    useEffect(() => {
        getAllBlog();
    }, []);

    return {loading, error, blogs, blog, getAllBlog, getBlogById, createBlog}
}

export default useBlog