import mongoose, {Schema, Document} from "mongoose";

export interface ISpot extends Document{
    title: string,
    description: string,
    headerImg: string,
}

const spotSchema : Schema = new Schema({
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

const Spot = mongoose.model<ISpot>('Spot', spotSchema);
export default Spot;