import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createSellRequest, getSellsRequest , statusSaleRequest, informSaleRequest, deleteSaleRequest } from "../api/Sells";
import { useVehicles } from "../../Vehicles/context/vehiclesContext";

const SellContext = createContext();

export const useSells = () => {
    const context = useContext(SellContext);
    return context;
};



export function SellProvider({children}) {
    const [sells, setSells] = useState([]);
    const {getVehicles} = useVehicles();
    
    const getSells = async () => {
        try {
            const res = await getSellsRequest();
            setSells(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createSell = async (sell) => {
        try {
            const res = await createSellRequest(sell);
            toast.success('Venta Creado con extio!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
            getSells();
            getVehicles();
            return res.data;
        } catch (error) {
            toast.error('Error al crear una venta.' ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            console.log(error)
            throw new Error(error.message);
        }
    };

    const statusSale = async (idSale) => {
        try {
            await statusSaleRequest(idSale);
            toast.success('Venta anulada con exito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
            getSells();
        } catch (error) {
            toast.error('Error al cambiar al anular la venta.' ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };

    const informSale = async (firstParameter, secondParameter) => {
        try {
            await informSaleRequest(firstParameter, secondParameter );
            toast.success('Informe generado con exito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
            getSells();
        } catch (error) {
            console.log(error);
            toast.error('Error al generar el informe' ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
        }
    };

    const deleteSale = async (idSale) => {
        try {
            await deleteSaleRequest(idSale);
            toast.success('Venta eliminada con exito',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
            getSells();
        } catch (error) {
            console.log(error);
            toast.error('Error al eliminar la venta' ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
        }
    };

    return(
        <SellContext.Provider value={{sells, getSells, createSell, statusSale, informSale, deleteSale }}>
            {children}
        </SellContext.Provider>
    )
};