import axios from '../../api/axios.js';

export const getPurchasesRequest = async (req, res) => axios.get('/Purchases');

export const createPurchaseRequest = async (purchase) => axios.post('/Purchases', purchase);

