import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface User {
    id: string;
    username: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}


const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.header('Authorization')

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: 'Token tidak terdeteksi'
            });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token tidak terdeteksi'
            });
        }

        const apiToken = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        if (!apiToken || typeof apiToken !== 'object' || !('id' in apiToken)) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }
        
        req.user = apiToken as User; 
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

export default verifyToken