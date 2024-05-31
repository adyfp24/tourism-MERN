import express from "express";
import { BlogController } from "../controllers/blog-controller";
import verifyToken from "../middlewares/verify-jwt";
import upload from "../middlewares/multer";
const router = express.Router();

router.get('/blog', BlogController.getAllBlog);
router.get('/blog/:id', BlogController.getBlogById)
router.post('/blog', verifyToken, upload.single('file'), BlogController.createBlog);
router.put('/blog/:id', verifyToken, BlogController.updateBlog);
router.delete('/blog/:id', verifyToken, BlogController.deleteBlog);

router.post('/author', verifyToken, BlogController.insertWriters);

export default router