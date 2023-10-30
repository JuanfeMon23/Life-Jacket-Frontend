import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getVehiclesRequest, getVehicleRequest, createVehiclesRequest, updateVehicleRequest, getVehicleTypeRequest , statusVehicleRequest, createVehicleDetailRequest } from "../api/Vehicles";

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
            getVehicles();
            return res.data;
        } catch (error) {
            toast.error('Error al crear.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            console.log(error)
            throw new Error(error.message);
        }
    };

    const createVehicleDetail = async ( detail) => {
        try {
            const res = await createVehicleDetailRequest( detail);
            toast.success('Vehiculo creado con exito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
            });
            getVehicles();
            return res.data;
        } catch (error) {
            toast.error('Error al crear.' ,{
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
            toast.success('Vehiculo actualizado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getVehicles();
        } catch (error) {
            toast.error('Error al actualizar.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    const statusVehicle = async (idVehicle, vehicle) => {
        try {
            await statusVehicleRequest(idVehicle, vehicle);
            toast.success('Estadp del vehículo actualizado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getVehicles();
        } catch (error) {
            toast.error('Error al actualizar.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    return(
        <VehiclesContext.Provider value={{vehicles, getVehicle, getVehicles, createVehicle, updateVehicle, getVehicletype, statusVehicle, createVehicleDetail}}>
            {children}
        </VehiclesContext.Provider>
    )
};