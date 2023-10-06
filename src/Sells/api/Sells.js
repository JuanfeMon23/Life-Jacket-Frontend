import axios from '../../api/axios.js';

export const getSellsRequest = async () => axios.get('/Sales');

export const createSellRequest = async (sell) => axios.post('/Sales', sell);

export const statusSaleRequest = async (idSale) => axios.patch(`/Sales/${idSale}`);