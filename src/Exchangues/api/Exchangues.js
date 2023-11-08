import axios from '../../api/axios.js';

export const getExchangesRequest = async () => axios.get('/Exchange');

export const createExchangeRequest = async (Exchange) => axios.post('/Exchange', Exchange);

export const updateExchangeRequest = async (idExchange, Exchange) => axios.put(`/Exchange/${idExchange}`, Exchange);

export const createExchangeDetailRequest = async (idExchange, ExchangeDetail) => axios.post(`/Exchange/${idExchange}`, ExchangeDetail);

export const cancelExchangeRequest = async (idExchange) => axios.delete(`/Exchange/Cancel/${idExchange}`);

export const cancelExchangeDetailRequest = async (idExchange) => axios.delete(`/Exchange/Detail/${idExchange}`);

export const nullifyExchangeRequest = async (idExchange) => axios.patch(`/Exchange/${idExchange}`);

export const reportExchangeRequest = async (startDate, finalDate) => axios.get(`/Exchange/report/${startDate}/${finalDate}`);