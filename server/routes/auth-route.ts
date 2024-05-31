import express from "express";
import { AuthController } from "../controllers/auth-controller";
import verifyToken from "../middlewares/verify-jwt";

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/profile', verifyToken, AuthController.profile);

export default router;

