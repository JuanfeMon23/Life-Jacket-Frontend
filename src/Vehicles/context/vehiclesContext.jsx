import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getVehiclesRequest, createVehiclesRequest, updateVehicleRequest, getVehicleTypeRequest , statusVehicleRequest, deleteVehicleRequest,
     getBrandsRequest, createBrandsRequest, deleteBrandsRequest } from "../api/Vehicles";

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

    const createBrand = async (brand) => {
        try {
            const res = await createBrandsRequest(brand);
            toast.success('Línea registrada con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getBrands();
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };


    const deleteBrands = async (idBrand) => {
        try {
            await deleteBrandsRequest(idBrand);
            toast.success('Línea eliminada con éxito!',{
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


    const createVehicle = async (vehicle) => {
        try {
            const res = await createVehiclesRequest(vehicle);
            toast.success('Vehículo creado con éxito!',{
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
        <VehiclesContext.Provider value={{vehicles, getVehicles, createVehicle, updateVehicle, getVehicletype, statusVehicle, deleteVehicle ,
            brands, getBrands, createBrand, deleteBrands }}>
            {children}
        </VehiclesContext.Provider>
    )
};