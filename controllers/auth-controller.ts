import { Request, Response } from "express";
import { AuthService } from "../services/auth-service";

class AuthController{
    static async register(req: Request, res: Response) {
        try {
            const {
                username,
                email,
                password,
                role
            } = req.body;

            const data = {
                username,
                email,
                password,
                role
            }

            const newUser = await AuthService.register(data);
            if(newUser){
                res.status(200).json({
                    message: 'user berhasil mendaftar',
                    data: newUser
                })
            }else{
                res.status(404).json({
                    message: 'user gagal mendaftar',
                    data: newUser
                })
            }
        } catch (error) {
            res.status(500).json({
                message: 'internal server error' + error,     
            })
        }
    }
}

export default AuthController