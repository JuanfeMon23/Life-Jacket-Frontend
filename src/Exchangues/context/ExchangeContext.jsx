import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getExchangesRequest,  createExchangeRequest,  updateExchangeRequest, createExchangeDetailRequest ,
    cancelExchangeRequest, cancelExchangeDetailRequest, nullifyExchangeRequest, reportExchangeRequest } from "../api/Exchangues";

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

    const createExchnageDetail = async (idExchange, exchangeDetail) => {
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

    const exchangeReport = async (startDate, finalDate) => {
        try {
            await reportExchangeRequest(startDate, finalDate);
            toast.success('Reporte de cambios generado con exito.',{
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
 


    return(
        <ExchangeContext.Provider
        value={{exchanges, getExchanges, createExchange, updateExchange, createExchnageDetail, cancelExchange, cancelExchangeDetail, nullifyExchange, exchangeReport}}
        >
            {children}
        </ExchangeContext.Provider>
    )
};