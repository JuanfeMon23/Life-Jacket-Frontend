import axios from '../../api/axios.js';

export const getPurchasesRequest = async (req, res) => axios.get('/Purchases');

export const createPurchaseRequest = async (purchase) => axios.post('/Purchases', purchase);

export const statusPurchasesRequest = async (idPurchase) => axios.patch(`/Purchases/${idPurchase}`);

export const informPurchaseRequest = async (firstParameter, secondParameter) => {
    const response = await axios.get(`/Purchases/Report/${firstParameter}/${secondParameter}`, {
        responseType: 'blob', 
    });
    return response.data;
 };

export const deletePurchaseRequest = async (idPurchase) => axios.delete(`/Purchases/${idPurchase}`);

