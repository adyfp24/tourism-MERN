import { StringExpression } from "mongoose";
import Destination from "../models/Destinasi";


interface IDestination {
    title: string,
    description: string,
    headerImg: string
}

export class DestinationService {
    static async create(data: IDestination) {
        try {
            const newDestination = await Destination.create(data)
            if (!newDestination) {
                return false
            }
            return newDestination
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create destination');
        }
    }

    static async getAll(){
        try {
            const allDestination = await Destination.find().populate('spots').populate('activities');
            if(!allDestination){
                return false
            }
            return allDestination 
        } catch (error) {
            console.error(error);
            throw new Error('Failed to get all destination');
        }
    }

}