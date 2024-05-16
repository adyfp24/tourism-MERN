import { Request, Response } from "express";
import { DestinationService } from "../services/dest-services";

export class DestinasiController {
    static async createDestinasi(req: Request, res: Response) {
        try {
            const {
                title,
                description,
                headerImg,
            } = req.body;

            const data = {
                title,
                description,
                headerImg,
            };

            const newDestination = await DestinationService.create(data);

            if (newDestination) {

                res.status(200).json({
                    success: true,
                    message: 'User berhasil mendaftar',
                    data: newDestination,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'User gagal mendaftar',
                });
            }
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: "internal server eror :" + error
            });

            console.log(error)
        }
    }
}