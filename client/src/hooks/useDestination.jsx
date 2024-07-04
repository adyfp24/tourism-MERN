import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import { getAllService, getByIdService, addService, updateService, deleteService, } from "../services/destService";

const useDestination = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [destinasi, setDestinasi] = useState([]);
    const [dest, setDest] = useState(null);
    const { token } = useAuth();

    const getDataById = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getByIdService();
            setDest(data);
        } catch (err) {
            setError(err.response ? err.response.data : 'Get destination by id failed')
        } finally {
            setLoading(false);
        }
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

    useEffect(() => {
        getAllData();
    }, []);


    return { destinasi, dest, loading, error, getDataById, getAllData, addData, updateData, deleteData }
}

export default useDestination;

