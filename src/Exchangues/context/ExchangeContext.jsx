import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getExchangesRequest,  createExchangeRequest,  updateExchangeRequest, createExchangeDetailRequest ,
    cancelExchangeRequest, cancelExchangeDetailRequest, nullifyExchangeRequest, informPurchaseRequest } from "../api/Exchangues";

const ExchangeContext = createContext();

export const useExchange = () => {
    const context = useContext(ExchangeContext);
    return context;
}

export function ExchangeProvider({children}){
    const [exchanges, setExchanges] = useState([]);

    const getExchanges = async () => {
        try {
            const res = await getExchangesRequest();
            setExchanges(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createExchange = async (exchange) => {
        try {
            const res = await createExchangeRequest(exchange);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const updateExchange  =  async (idExchange, exchange) => {
        try {
            await updateExchangeRequest(idExchange, exchange);
            toast.success('Cambio creado con exito.',{
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

    const createExchangeDetail = async (idExchange, exchangeDetail) => {
        try {
            const res = await createExchangeDetailRequest(idExchange,exchangeDetail );
            setExchanges(res);
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
            toast.success('Cambio Cancelado.',{
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
            toast.success('Vehiculo elminado del intercambio.',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
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
            toast.success('Cambio anulado con exito.',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
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
            toast.error('Error al generar el informe', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
        }
    };
 


    return(
        <ExchangeContext.Provider
        value={{exchanges, getExchanges, createExchange, updateExchange, createExchangeDetail, cancelExchange, cancelExchangeDetail, nullifyExchange, informExchange}}
        >
            {children}
        </ExchangeContext.Provider>
    )
};