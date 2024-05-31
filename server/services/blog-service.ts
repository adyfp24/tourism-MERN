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


    static async insertWriters(writersData: { name: string; email: string }[]) {
        try {
            const newWriters = await Writer.insertMany(writersData);
            return newWriters;
        } catch (error) {
            throw new Error('Failed to create writers: ' + error);
        }
    }

}