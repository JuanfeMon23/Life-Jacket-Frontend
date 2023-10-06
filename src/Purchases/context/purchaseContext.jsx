import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createPurchaseRequest, getPurchasesRequest, statusPurchasesRequest } from "../api/Purchases";

const PurchaseContext = createContext();

export const usePurchases = () => {
    const context = useContext(PurchaseContext);
    return context;
};

export function PurchaseProvider ({children}) {
    const [purchases, setPurchases] = useState([]);

    const getPurchases = async () => {
        try {
            const res = await getPurchasesRequest();
            setPurchases(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createPurchase = async (purchase) => {
        try {
            const res = await createPurchaseRequest(purchase);
            toast.success('Compra Creado con extio!',{
                position: toast.POSITION.TOP_CENTER
            });
            return res.data;
        } catch (error) {
            console.log(error)
            toast.error('Error al crear una compra.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    const statusPurchase = async (idPurchase) => {
        try {
            await statusPurchasesRequest(idPurchase);
            toast.success('Estado de compra modificado con extio!',{
                position: toast.POSITION.TOP_CENTER
            });
        } catch (error) {
            toast.error('Error al cambiar de estado.' ,{
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return(
        <PurchaseContext.Provider value={{purchases, getPurchases, createPurchase, statusPurchase}}>
            {children}
        </PurchaseContext.Provider>
    )
};