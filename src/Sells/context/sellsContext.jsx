import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getSellsRequest , statusSaleRequest, informSaleRequest, deleteSaleRequest, contractSaleRequest } from "../api/Sells";
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

    const statusSale = async (idSale) => {
        try {
            await statusSaleRequest(idSale);
            toast.success('Venta anulada con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
            getSells();
        } catch (error) {
            toast.error(error.response.data.message  ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };
     
    const informSale = async (firstParameter, secondParameter) => {
        try {
            const file = await informSaleRequest(firstParameter, secondParameter);
            const url = window.URL.createObjectURL(new Blob([file]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'reporteVenta.pdf');
            document.body.appendChild(link);
            link.click();
            toast.success('Reporte generado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
        }
     };

     const contractSale = async (idSale) => {
        try {
            const contract = await contractSaleRequest(idSale);
            const url = window.URL.createObjectURL(new Blob([contract]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'ContratoDeVenta.pdf');
            document.body.appendChild(link);
            link.click();
            toast.success('Contrato de Venta generado con éxito!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            }); 
        } catch (error) {
            toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
            
        }
     };

    const deleteSale = async (idSale) => {
        try {
            await deleteSaleRequest(idSale);
            toast.success('Venta eliminada con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
            getSells();
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
        }
    };

    return(
        <SellContext.Provider value={{sells, getSells, statusSale, informSale, deleteSale, contractSale }}>
            {children}
        </SellContext.Provider>
    )
};