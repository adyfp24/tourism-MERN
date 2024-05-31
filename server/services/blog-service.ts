import Blog from "../models/Blog";

interface iBlog {
    title: string;
    writer: string;
    content: string;
    date: Date;
    blogImg: string;
}

export class BlogService{
    static async createBlog (data : iBlog){
        try {
            const newBlog = await Blog.create(data);
            if(!newBlog){
                return false
            }
            return newBlog
        } catch (error) {
            console.error(error);
            throw new Error('error when create blog');
        }
    }
}