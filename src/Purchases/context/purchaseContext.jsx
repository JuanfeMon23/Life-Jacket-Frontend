import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createPurchaseRequest, getPurchasesRequest, statusPurchasesRequest, informPurchaseRequest, deletePurchaseRequest } from "../api/Purchases";

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
            toast.success('Compra creada con éxito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getPurchases();
            return res.data;
        } catch (error) {
            console.log(error)
            toast.error('Error al crear la compra' ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            console.log(error)
            throw new Error(error.message);
        }
    };

    const statusPurchase = async (idPurchase) => {
        try {
            await statusPurchasesRequest(idPurchase);
            toast.success('Compra anulada con éxito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getPurchases();
        } catch (error) {
            toast.error(error.response.data.message  ,{
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    const informPurchase = async (firstParameter, secondParameter) => {
        try {
            const file = await informPurchaseRequest(firstParameter, secondParameter);
            const url = window.URL.createObjectURL(new Blob([file]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'reporteCompra.pdf');
            document.body.appendChild(link);
            link.click();
            toast.success('Reporte generado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
        } catch (error) {
            console.log(error);
            toast.error('Error al generar el informe', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
        }
    };

    const deletePurchase = async (idPurchase) => {
        try {
            await deletePurchaseRequest(idPurchase);
            toast.success('Compra eliminada con éxito!',{
                autoClose : 1500,
                position: toast.POSITION.TOP_CENTER
            });
            getPurchases();
        } catch (error) {
            toast.error('Error al eliminar la compra' ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };

    return(
        <PurchaseContext.Provider value={{purchases, getPurchases, createPurchase, statusPurchase, informPurchase, deletePurchase}}>
            {children}
        </PurchaseContext.Provider>
    )
};