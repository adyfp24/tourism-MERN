import mongoose, { Schema }  from "mongoose";

interface iWriter extends Document{
    name: string,
    email: string
}

const writerSchema : Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
}) 

const Writer = mongoose.model<iWriter>('Writer', writerSchema);
export default Writer;