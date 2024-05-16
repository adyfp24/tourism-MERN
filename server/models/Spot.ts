import mongoose, {Schema, Document} from "mongoose";

export interface ISpot extends Document{
    title: string,
    deskripsi: string,
    headerImg: string,
}


const spotSchema : Schema = new Schema({
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

export default spotSchema;