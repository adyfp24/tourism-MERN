import { useState, useEffect } from "react";
import { getAllService, getByIdService } from "../services/blogService";

const useBlog = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState(null);

    const getAllBlog = async () => {
        setLoading(true);
        setError(null);
        try {
            const allBlog = await getAllService();
            setBlogs(allBlog);
        } catch (error) {
            setError(error.response ? error.response.data : 'get all blog failed');
        } finally {
            setLoading(false);
        }
    };

    const getBlogById = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const blog = await getByIdService(id);
            setBlog(blog);
            console.log("Blog detail:", blog); // Tambahkan log untuk memastikan data diterima
        } catch (error) {
            setError(error.response ? error.response.data : 'get detail blog failed');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllBlog();
    }, []);

    return { loading, error, blogs, blog, getAllBlog, getBlogById };
};

export default useBlog;
