import express from "express";
import { DestinasiController } from "../controllers/dest-controller";
import verifyToken from "../middlewares/verify-jwt";
const router = express.Router();

router.post('/destinasi', verifyToken, DestinasiController.createDestinasi);

export default router;