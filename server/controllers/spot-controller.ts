import { Request, Response } from "express";
import { SpotService } from "../services/spot-service";

export class SpotController {
    static async createSpot(req: Request, res: Response) {
        try {
            const { id_destinasi: destinationId } = req.params
            const {
                title,
                description,
                headerImg
            } = req.body;
            const data = { title, description, headerImg };
            const newSpot = await SpotService.create(data, destinationId);

            if (newSpot) {
                res.status(200).json({
                    success: true,
                    message: 'spot berhasil ditambahkan',
                    data: newSpot,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'spot gagal ditambahkan',
                });
            }

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'internal server eror',
            });
        }
    }
}