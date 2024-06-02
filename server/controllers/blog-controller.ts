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

    static async insertWriters(req: Request, res: Response) {
        try {
            const writersData = [
                { name: 'Admin Amel', email: 'amel.doe@example.com' },
                { name: 'Admin Doni', email: 'doni.smith@example.com' },
                { name: 'Admin Rizky', email: 'rizky.johnson@example.com' },
                { name: 'Admin Putri', email: 'putri.brown@example.com' },
                { name: 'Admin Hanif', email: 'hanif.davis@example.com' },
            ];

            const newWriters = await BlogService.insertWriters(writersData);
            
            if (newWriters) {
                res.status(200).json({
                    success: true,
                    message: 'Writers berhasil ditambahkan',
                    data: newWriters,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Writers gagal ditambahkan',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error: ' + error,
            });
        }
    }

    static async getAllBlog(req: Request, res: Response) {
        try {
            const allBlog = await BlogService.getAllBlog();
            if(allBlog){
                res.status(200).json({
                    succes: true,
                    message: 'berhasil mendapat data blog',
                    data: allBlog
                })
            }else{
                res.status(404).json({
                    succes: false,
                    message: 'data blog tidak tersedia'
                })
            }
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: 'Internal server error' + error
            })
        }
    }

    static async getBlogById(req: Request, res: Response) {
        try {
            const blogId = req.params.id;
            const blog = await BlogService.getBlogById(blogId);
            if(blog){
                res.status(200).json({
                    succes: true,
                    message: 'berhasil mendapat data blog',
                    data: blog
                })
            }else{
                res.status(404).json({
                    succes: false,
                    message: 'data blog tidak tersedia'
                })
            }
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: 'Internal server error' + error
            })
        }
    }

    static async updateBlog(req: Request, res: Response) {

    }

    static async deleteBlog(req: Request, res: Response) {

    }

};