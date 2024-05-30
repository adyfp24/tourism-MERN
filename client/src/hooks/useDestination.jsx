import { useState } from "react"
import useAuth from "./useAuth"

const useDestination = () => {
    const [loading, setLoading ] = useState;
    const {token} = useAuth();

    const getDataById = async () => {

    }

    const getAllData = async () => {

    }

    const addData = async () => {

    }

    const updateData = async () => {
        
    }

    const deleteData = async () => {

    }

    return {getDataById, getAllData, addData, updateData, deleteData }
}

export default useDestination;

