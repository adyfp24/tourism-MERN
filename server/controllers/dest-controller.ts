import { Request, Response } from "express";

export class DestinasiController {
    static async createDestinasi (req: Request, res: Response) {
        try {
            const {
                tittle,
                desciption,
                headerImg,
                spot,
                activity
            } = req.body;

            const data = {
                tittle,
                desciption,
                headerImg,
                spot,
                activity
            };
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: "internal server eror :" + error 
            });

            console.log(error)
        }
    }
}