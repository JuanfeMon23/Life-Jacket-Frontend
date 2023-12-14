import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getExchangesRequest,  createExchangeRequest, createExchangeDetailRequest ,
    cancelExchangeRequest, cancelExchangeDetailRequest, nullifyExchangeRequest, informPurchaseRequest, getExchangesFiteredRequest } from "../api/Exchangues";


const ExchangeContext = createContext();

export const useExchange = () => {
    const context = useContext(ExchangeContext);
    return context;
}

export function ExchangeProvider({children}){
    const [exchanges, setExchanges] = useState([]);
    const [exchangesFiltered, setExchangesFiltered] = useState([]);

    const getExchanges = async () => {
        try {
            const res = await getExchangesRequest();
            setExchanges(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const getExchangesFiltered = async () => {
        try {
            const res = await getExchangesFiteredRequest();
            setExchangesFiltered(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createExchange = async () => {
        try {
            const res = await createExchangeRequest();
            getExchanges();
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };


    const createExchangeDetail = async (idExchange, exchangeDetail) => {
        try {
             await createExchangeDetailRequest(idExchange,exchangeDetail );
             toast.success('Vehículo agregado al intercambio con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getExchanges();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };

    const cancelExchange = async (idExchange) => {
        try {
            await cancelExchangeRequest(idExchange);
            toast.success('Intercambio cancelado',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getExchanges();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };

    const cancelExchangeDetail = async (idExchangeDetail) => {
        try {
            await cancelExchangeDetailRequest(idExchangeDetail);
            toast.success('Vehículo eliminado del intercambio',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getExchanges();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };

    const nullifyExchange = async (idExchange) => {
        try {
            await nullifyExchangeRequest(idExchange);
            toast.success('Intercambio anulado con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            getExchanges();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
        }
    };

    const informExchange = async (firstParameter, secondParameter) => {
        try {
            const file = await informPurchaseRequest(firstParameter, secondParameter);
            const url = window.URL.createObjectURL(new Blob([file]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'reporteCambio.pdf');
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
 


    return(
        <ExchangeContext.Provider
        value={{exchanges, getExchanges, createExchange, createExchangeDetail, cancelExchange, cancelExchangeDetail, nullifyExchange, informExchange, getExchangesFiltered, exchangesFiltered}}
        >
            {children}
        </ExchangeContext.Provider>
    )
};