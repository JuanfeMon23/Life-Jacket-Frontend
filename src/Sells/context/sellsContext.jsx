import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createSellRequest, getSellsRequest , statusSaleRequest, informSaleRequest } from "../api/Sells";

const SellContext = createContext();

export const useSells = () => {
    const context = useContext(SellContext);
    return context;
};

export function SellProvider({children}) {
    const [sells, setSells] = useState([]);

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
                position: toast.POSITION.TOP_CENTER
            });
            getSells();
            return res.data;
        } catch (error) {
            toast.error('Error al crear una venta.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    const statusSale = async (idSale) => {
        try {
            await statusSaleRequest(idSale);
            toast.success('Estado de la venta con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getSells();
        } catch (error) {
            toast.error('Error al cambiar el estado' ,{
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    const informSale = async (firstParameter, secondParameter) => {
        try {
            await informSaleRequest(firstParameter, secondParameter );
            toast.success('Informe generado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getSells();
        } catch (error) {
            console.log(error);
            toast.error('Error al generar el informe' ,{
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    return(
        <SellContext.Provider value={{sells, getSells, createSell, statusSale, informSale }}>
            {children}
        </SellContext.Provider>
    )
};