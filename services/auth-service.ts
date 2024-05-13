import User from "../models/User";
import bcrypt from 'bcrypt';
import {generateJWT} from "../utils/sign-token";

export class AuthService {
    static async register(userData: any) {
        try {
            const isUsernameExist = await User.findOne({ username: userData.username });
            if (isUsernameExist) {
                return { success: false, message: 'username sudah digunakan' };
            }

            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const newUser = new User({
                ...userData,
                password: hashedPassword
            });
            const data = newUser.save();
            return data;
        } catch (error) {
            console.error(error);
            return { success: false, message: 'Internal server error: ' + error };
        }
    }

    static async login(userData: any) {
        try {
            const user = await User.findOne({
                username: userData.username,
            });

            if (!user) {
                return { succes: false, message: "username tidak terdaftar" }
            }

            const passwordValid = await bcrypt.compare(userData.password, user.password);
            if (!passwordValid) {
                return { succes: false, message: "password salah" }
            }

            const apiToken = generateJWT(user.id_user);
            return {
                success: true,
                message: 'Login sukses',
                data: user,
                token: apiToken
            };
        } catch (error) {
            console.error(error);
            return { success: false, message: 'Internal server error: ' + error };
        }
    }
};

