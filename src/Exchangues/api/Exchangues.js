import axios from '../../api/axios.js';

export const getExchangesRequest = async () => axios.get('/Exchange');

export const getExchangesFiteredRequest = async () => axios.get('/Exchange-Filtered');

export const createExchangeRequest = async () => axios.post('/Exchange',);

export const updateExchangeRequest = async (idExchange, Exchange) => axios.put(`/Exchange/${idExchange}`, Exchange);

export const createExchangeDetailRequest = async (idExchange, ExchangeDetail) => axios.post(`/Exchange/${idExchange}`, ExchangeDetail);

export const cancelExchangeRequest = async (idExchange) => axios.delete(`/Exchange/Cancel/${idExchange}`);

export const cancelExchangeDetailRequest = async (idExchange) => axios.delete(`/Exchange/Detail/${idExchange}`);

export const nullifyExchangeRequest = async (idExchange) => axios.patch(`/Exchange/${idExchange}`);

export const informPurchaseRequest = async (firstParameter, secondParameter) => {
    const response = await axios.get(`/Exchange/Report/${firstParameter}/${secondParameter}`, {
        responseType: 'blob',
    });
    return response.data;
 };