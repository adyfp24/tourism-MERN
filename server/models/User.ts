import mongoose, { Schema } from 'mongoose';

enum userRole {
    User = 'user',
    Admin = 'admin'
}

interface IUser {
    username: string,
    email: string,
    password: string,
    role: string,
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(userRole),
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;