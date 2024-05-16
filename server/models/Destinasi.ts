import mongoose, { Document, Schema } from 'mongoose';
import { ISpot } from './Spot';
import { IActivity } from './Activity';

export interface IDestination extends Document {
  title: string;
  description: string;
  headerImg: string;
  spots: ISpot[];
  activities: IActivity[];
}

const destinationSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  headerImg: {
    type: String,
    required: true,
  },
  spots: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Spot',
    required: true,
  },
  activities: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Activity',
    required: true,
  }
}, {
  timestamps: true
});

const Destination = mongoose.model<IDestination>('Destination', destinationSchema);
export default Destination;
