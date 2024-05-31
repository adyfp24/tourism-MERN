import mongoose, { Schema, Document, Types } from "mongoose";  

export interface IBlog extends Document {
    title: string;
    writer: string;
    content: string;
    date: Date;
    blogImg: string;
}

const blogSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    writer: {
        type: Types.ObjectId,
        ref: 'Writer',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    blogImg: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Blog = mongoose.model<IBlog>('Blog', blogSchema);
export default Blog;
