import User, {IUser} from "../models/User";
import bcrypt from 'bcrypt';
import { generateJWT } from "../utils/sign-token";

interface UserData {
    username: string;
    email?: string;
    password: string;
    role?: string;
}

export class AuthService {
    static async register(userData: UserData) {
        try {
            const isUsernameExist = await User.findOne({ username: userData.username });
            if (isUsernameExist) {
                return false;
            }

            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const newUser = new User({
                ...userData,
                password: hashedPassword,
            });
            const data = await newUser.save();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('Terjadi kesalahan saat registrasi');
        }
    }

    static async login(userData: UserData) {
        try {
            const user = await User.findOne({ username: userData.username });

            if (!user) {
                return false
            }

            const passwordValid = await bcrypt.compare(userData.password, user.password);
            if (!passwordValid) {
                return false;
            }

            const apiToken = generateJWT(user._id, user.username);
            return {
                user,
                apiToken,
            };
        } catch (error) {
            console.error(error);
            throw new Error('Failed to login user');
        }
    }
}
