import Destination from "../models/Destinasi";
import Spot from "../models/Spot";

interface ISpot {
    title: string,
    description: string,
    headerImg: string
}

export class SpotService {

    static async create (data : ISpot, destinationId: any){
        try {
            const newSpot = new Spot(data);
            const savedSpot = await newSpot.save();

            const destination = await Destination.findByIdAndUpdate(
                destinationId,
                {$push: {spots: savedSpot._id}},
                {new: true, useFindAndModify: false }
            )
            if(!destination){
                return false
            }

            return savedSpot;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create destination');
        }
    }
}