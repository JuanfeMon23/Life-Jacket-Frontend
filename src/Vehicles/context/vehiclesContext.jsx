import { createContext, useContext, useState } from "react";

import { getVehiclesRequest, getVehicleRequest, createVehiclesRequest } from "../api/Vehicles";

const VehiclesContext = createContext();

export const useVehicles =  () => {
    const context = useContext(VehiclesContext);
    return context;
};

export function VehicleProvider({children}){
    const [vehicles, setVehicles] = useState([]);

    const getVehicles = async () => {
        try {
            const res = await getVehiclesRequest();
            setVehicles(res.data);
        } catch (error) {
            throw new Error(error.message);
        }

    };


    const getVehicle = async () => {
        try {
            const res = await getVehicleRequest();
            setVehicles(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createVehicle = async (data) => {
        try {
            const res = await createVehiclesRequest(data);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return(
        <VehiclesContext.Provider value={{vehicles, getVehicle, getVehicles, createVehicle}}>
            {children}
        </VehiclesContext.Provider>
    )
};