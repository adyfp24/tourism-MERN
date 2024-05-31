import { Request, Response } from "express";
import { BlogService } from "../services/blog-service";

export class BlogController {
    static async createBlog(req: Request, res: Response) {
        try {       
            const { title, content, writer } = req.body;
            const date = new Date();
            const blogImg = req.file ? req.file.filename : '';
            const blogData = { title, content, writer, date, blogImg };
            const newBlog = await BlogService.createBlog(blogData);
            if (newBlog) {
                res.status(200).json({
                    success: true,
                    message: 'blog berhasil ditambahkan',
                    data: newBlog,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'blog gagal ditambahkan',
                });
            }
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: "internal server eror :" + error
            });
        }

    }

    static async getAllBlog(req: Request, res: Response) {

    }

    static async getBlogById(req: Request, res: Response) {

    }

    static async updateBlog(req: Request, res: Response) {

    }

    static async deleteBlog(req: Request, res: Response) {

    }

};