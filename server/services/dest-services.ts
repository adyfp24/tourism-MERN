import { StringExpression } from "mongoose";
import Destination from "../models/Destinasi";


interface destinationData {
    title: string,
    description: string,
    headerImg: string
}

export class DestinationService {
    static async create(data: destinationData) {
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
}