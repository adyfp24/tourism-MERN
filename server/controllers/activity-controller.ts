import { Request, Response } from "express";
import { ActivityService } from "../services/activity-service";

export class ActivityController {
    static async createSpot(req: Request, res: Response) {
        try {
            const { id_destinasi: destinationId } = req.params
            const {
                title,
                description,
                headerImg
            } = req.body;
            const data = { title, description, headerImg };
            const newActivity = await ActivityService.create(data, destinationId);

            if (newActivity) {
                res.status(200).json({
                    success: true,
                    message: 'aktivitas berhasil ditambahkan',
                    data: newActivity,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'aktivitas gagal ditambahkan',
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