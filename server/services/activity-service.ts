import Activity from "../models/Activity";
import Destination from "../models/Destinasi";

interface IActivity{
    title: string,
    description: string,
    headerImg: string
}

export class ActivityService {

    static async create (data : IActivity, destinationId: any){
        try {
            const newActivity = new Activity(data);
            const savedActivity = await newActivity.save();

            const destination = await Destination.findByIdAndUpdate(
                destinationId,
                {$push: {activities: savedActivity._id}},
                {new: true, useFindAndModify: false }
            )
            if(!destination){
                return false
            }

            return savedActivity;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create spot');
        }
    }
}