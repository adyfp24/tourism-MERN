import express from "express";
import { DestinasiController } from "../controllers/dest-controller";
import verifyToken from "../middlewares/verify-jwt";
const router = express.Router();

router.post('/destinasi', verifyToken, DestinasiController.createDestination);
router.get('/destinasi', DestinasiController.getAllDestination);

export default router;