import axios from '../../api/axios';

export const getVehiclesRequest = async (vehicle) => axios.get('/Vehicles');

export const getVehicleTypeRequest = async (vehicleType) => axios.get('/vehicle-types', vehicleType);

export const createVehiclesRequest = async (vehicle) => axios.post('/Vehicles', vehicle);

export const createVehicleDetailRequest = async (detailVehicle) => axios.post(`/Vehicles/detail`, detailVehicle);

export const updateVehicleRequest = async (idVehicle, vehicle) => axios.put(`/Vehicles/${idVehicle}`, vehicle);

export const statusVehicleRequest = async (idVehicle, vehicle) => axios.patch(`/Vehicles/${idVehicle}`, vehicle);

export const deleteVehicleRequest = async (idVehicle) => axios.delete(`/Vehicles/${idVehicle}`);



export const getBrandsRequest = async () => axios.get('/Brands');

export const createBrandsRequest = async (brand) => axios.post('/Brands/Create', brand);

export const createLinesRequest = async (line) => axios.post('/Lines/Create', line);

export const deleteBrandsRequest = async (idBrand) => axios.delete(`/Brands/Delete/${idBrand}`);