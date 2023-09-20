import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createSellRequest, getSellsRequest } from "../api/Sells";

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
            return res.data;
        } catch (error) {
            toast.error('Error al crear una venta.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    return(
        <SellContext.Provider value={{sells, getSells, createSell}}>
            {children}
        </SellContext.Provider>
    )
};