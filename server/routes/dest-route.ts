import express from "express";
import { DestinasiController } from "../controllers/dest-controller";
import verifyToken from "../middlewares/verify-jwt";
import { SpotController } from "../controllers/spot-controller";
const router = express.Router();

router.post('/destinasi', verifyToken, DestinasiController.createDestination);
router.get('/destinasi', DestinasiController.getAllDestination);

router.post('/destinasi/:id_destinasi/spot', verifyToken, SpotController.createSpot);

export default router;