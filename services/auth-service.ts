import User from "../models/User";
import bcrypt from 'bcrypt';

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
            return { success: false, message: 'Internal server error' + error };
        }
    }
};

