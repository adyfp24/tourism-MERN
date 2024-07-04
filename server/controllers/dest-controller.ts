import { Request, Response } from "express";
import { DestinationService } from "../services/dest-services";

export class DestinasiController {
    static async createDestination(req: Request, res: Response) {
        try {
            const headerImg = req.file ? req.file.filename : '';
            
            const {
                title,
                description,
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
                    message: 'Destinasi berhasil ditambahkan',
                    data: newDestination,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Destinasi gagal ditambahkan',
                });
            }
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: "internal server eror :" + error
            });
        }
    }

    static async getAllDestination(req: Request, res: Response){
        try {
            const allDestination = await DestinationService.getAll();
            if(allDestination){
                res.status(200).json({
                    success: true,
                    message: 'Data destinasi tersedia',
                    data: allDestination,
                });
            }else{
                res.status(400).json({
                    success: false,
                    message: 'gagal mendapat data destinasi',
                });
            }
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: "internal server eror :" + error
            });
        }
    }

    static async getDestinationById(req: Request, res: Response){
        try {
            const id = req.params.id;
            const destination = await DestinationService.getById(id);
            if(destination != null){
                res.status(200).json({
                    success: true,
                    message: 'Data destinasi tersedia',
                    data: destination,
                });
            }else{
                res.status(400).json({
                    success: false,
                    message: 'gagal mendapat data destinasi',
                });
            }
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: "internal server eror :" + error
            }); 
        }
    }
}