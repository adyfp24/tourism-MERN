import { useState } from "react"
import useAuth from "./useAuth"
import { getAllService, getByIdService, addService, updateService, deleteService, } from "../services/destService";

const useDestination = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [destinasi, setDestinasi] = useState([]);
    const { token } = useAuth();

    const getDataById = async () => {

    }

    const getAllData = async () => {
        setLoading(true);
        setError(null);
        try {
            const allData = await getAllService();
            setDestinasi(allData);
        } catch (err) {
            setError(err.response ? err.response.data : 'Get destination failed')
        } finally {
            setLoading(false);
        }
    }

    const addData = async () => {

    }

    const updateData = async () => {

    }

    const deleteData = async () => {

    }

    return { destinasi, loading, error, getDataById, getAllData, addData, updateData, deleteData }
}

export default useDestination;

