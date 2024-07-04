import Blog from "../models/Blog";
import Writer from "../models/Writer";

interface iBlog {
    title: string;
    writer: string;
    content: string;
    date: Date;
    blogImg: string;
}

export class BlogService {
    static async createBlog(data: iBlog) {
        try {
            const newBlog = await Blog.create(data);
            if (!newBlog) {
                return false
            }
            return newBlog
        } catch (error) {
            console.error(error);
            throw new Error('error when create blog');
        }
    }

    static async getAllBlog(){
        try {
            const allBlog = await Blog.find().populate('writer');
            if(!allBlog){
                return false
            }
            return allBlog
        } catch (error) {
            console.error(error);
            throw new Error('error when get all blog');
        }
    }

    static async getBlogById(blogId: any){
        try {
            const blog = await Blog.findById(blogId).populate('writer');
            return blog
        } catch (error) {
            console.error(error);
            throw new Error('error when get blog detail');
        }
    }

    static async insertWriters(writersData: { name: string; email: string }[]) {
        try {
            const newWriters = await Writer.insertMany(writersData);
            return newWriters;
        } catch (error) {
            throw new Error('Failed to create writers: ' + error);
        }
    }

}