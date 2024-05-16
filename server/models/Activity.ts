import mongoose, {Schema, Document} from "mongoose";

export interface IActivity extends Document {
    title: string,
    deskripsi: string,
    headerImg: string,
}

const activitySchema : Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    headerImg: {
        type: String,
        required: true
    }
},{
    timestamps: true
}); 

export default activitySchema;