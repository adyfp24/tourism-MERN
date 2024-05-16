import mongoose, {Schema, Document} from "mongoose";

export interface IActivity extends Document {
    title: string,
    description: string,
    headerImg: string,
}

const activitySchema : Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
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

const Activity = mongoose.model<IActivity>('Activity', activitySchema);
export default Activity;