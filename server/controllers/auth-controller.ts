import { Request, Response } from "express";
import { AuthService } from "../services/auth-service";

export class AuthController {
    static async register(req: Request, res: Response) {
        try {
            const { username, email, password, role } = req.body;

            const data = { username, email, password, role };

            const newUser = await AuthService.register(data);
            if (newUser) {
                res.status(200).json({
                    success: true,
                    message: 'User berhasil mendaftar',
                    data: newUser,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'User gagal mendaftar',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error ' + error,
            });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;

            const data = { username, password };

            const loginUser = await AuthService.login(data);
            if (loginUser) {
                res.status(200).json({
                    success: true,
                    message: 'User berhasil login',
                    data: loginUser.user,
                    access_token: loginUser.apiToken
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'User gagal login',
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error ' + error,
            });
        }
    }
}
