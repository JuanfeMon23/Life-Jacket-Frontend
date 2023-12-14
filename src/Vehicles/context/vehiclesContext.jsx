import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getVehiclesRequest, updateVehicleRequest, getVehicleTypeRequest , statusVehicleRequest, deleteVehicleRequest,
    getBrandsRequest, deleteBrandsRequest } from "../api/Vehicles";

const VehiclesContext = createContext();

export const useVehicles =  () => {
    const context = useContext(VehiclesContext);
    return context;
};

export function VehicleProvider({children}){
    const [vehicles, setVehicles] = useState([]);
    const [brands, setBrands] = useState([]);

    const getBrands = async () => {
        try {
            const res = await getBrandsRequest();
            setBrands(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const deleteBrands = async (idBrand) => {
        try {
            await deleteBrandsRequest(idBrand);
            toast.success('Registro eliminado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getBrands();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

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




    const updateVehicle = async (idVehicle, vehicle) => {
        try {
            await updateVehicleRequest(idVehicle, vehicle);
            toast.success('Vehículo actualizado con éxito!',{
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
            toast.success('Estado actualizado con éxito!',{
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
            toast.success('Vehículo eliminado con éxito!',{
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
        <VehiclesContext.Provider value={{vehicles, getVehicles, updateVehicle, getVehicletype, statusVehicle, deleteVehicle ,
            brands, getBrands, deleteBrands }}>
            {children}
        </VehiclesContext.Provider>
    )
};
