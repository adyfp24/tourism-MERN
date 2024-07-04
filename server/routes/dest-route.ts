import express from "express";
import { DestinasiController } from "../controllers/dest-controller";
import verifyToken from "../middlewares/verify-jwt";
import { SpotController } from "../controllers/spot-controller";
import { ActivityController } from "../controllers/activity-controller";
import upload from "../middlewares/multer";
const router = express.Router();

router.post('/destinasi', verifyToken, upload.single('file'), DestinasiController.createDestination);
router.get('/destinasi', DestinasiController.getAllDestination);
router.post('/destinasi/:id_destinasi/spot', upload.single('file'), verifyToken, SpotController.createSpot);
router.post('/destinasi/:id_destinasi/activity', upload.single('file'), verifyToken, ActivityController.createSpot);
router.get('/destinasi/:id', DestinasiController.getDestinationById);

export default router;