import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createPurchaseRequest, getPurchasesRequest } from "../api/Purchases";

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
            toast.error('Error al crear una compra.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            console.log(error);
            throw new Error(error.message);
        }
    };

    return(
        <PurchaseContext.Provider value={{purchases, getPurchases, createPurchase}}>
            {children}
        </PurchaseContext.Provider>
    )
};