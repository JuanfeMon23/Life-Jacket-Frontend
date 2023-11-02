import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getVehiclesRequest, getVehicleRequest, createVehiclesRequest, updateVehicleRequest, getVehicleTypeRequest , statusVehicleRequest, deleteVehicleRequest } from "../api/Vehicles";

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

    const getVehicletype = async () => {
        try {
            const res = await getVehicleTypeRequest();
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const getVehicle = async (idVehicle, vehicle) => {
        try {
            const res = await getVehicleRequest(idVehicle, vehicle);
            setVehicles(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };



    const createVehicle = async (vehicle) => {
        try {
            const res = await createVehiclesRequest(vehicle);
            toast.success('Vehiculo Creado con exito.',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getVehicles();
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            console.log(error)
            throw new Error(error.message);
        }
    };



    const updateVehicle = async (idVehicle, vehicle) => {
        try {
            await updateVehicleRequest(idVehicle, vehicle);
            toast.success('Vehiculo actualizado con exito.',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
            });
            getVehicles();
        } catch (error) {
            toast.error(error.response.data.message,{
                position: toast.POSITION.TOP_CENTER,
                autoClose :1500
            });
            throw new Error(error.message);
        }
    };

    const statusVehicle = async (idVehicle, vehicle) => {
        try {
            await statusVehicleRequest(idVehicle, vehicle);
            toast.success('Vehiculo anulado  con exito.',{
                position: toast.POSITION.TOP_CENTER,
                autoClose :1500
            });
            getVehicles();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose :1500
            });
            throw new Error(error.message);
        }
    };

    const deleteVehicle = async (idVehicle) => {
        try {
            await deleteVehicleRequest(idVehicle);
            toast.success('Vehiculo eliminado con exito.',{
                position: toast.POSITION.TOP_CENTER,
                autoClose :1500
            });
            getVehicles();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose :1500
            });
            throw new Error(error.message);
            
        }
    }



    return(
        <VehiclesContext.Provider value={{vehicles, getVehicle, getVehicles, createVehicle, updateVehicle, getVehicletype, statusVehicle, deleteVehicle}}>
            {children}
        </VehiclesContext.Provider>
    )
};