import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createClientRequest, getClientRequest, getClientsRequest, stateClientRequest, updateClientRequest, deleteClientRequest } from "../api/Clients";

const ClientContext = createContext();

export const useClients = () => {
    const context = useContext(ClientContext);
    return context;
};

export function ClientProvider({children}){
    const [clients, setClients] = useState([]);
    
    const getClients = async () => {
        try {
            const res = await getClientsRequest();
            setClients(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const getClient =  async (idClient,client) => {
        try {
            const res = await getClientRequest(idClient,client);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createClient = async (client) => {
        try {
            const res = await createClientRequest(client);
            toast.success('Cliente creado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getClients();
            return res.data;
        } catch (error) {
            toast.error('Error al crear.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            console.log(error);
            throw new Error(error.message);
        }
    };

    const updateClient = async (idClient, client) => {
        try {
            await updateClientRequest(idClient, client);
            toast.success('Cliente actualizado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getClients();
        } catch (error) {
            toast.error('Error al actualizar.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    const statusClient = async (idClient) => {
        try {
            await stateClientRequest(idClient);
            toast.success('Estado actualizado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getClients();
        } catch (error) {
            toast.error('Error al actualizar el estado.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };

    const deleteClient = async (idClient) => {
        try {
            await deleteClientRequest(idClient);
            toast.success('Ciente eliminado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getClients();
        } catch (error) {
            toast.error('Error al eliminar.' ,{
                autoClose : 1500,
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message);
        }
    };



    return(
        <ClientContext.Provider value={{clients, getClient, getClients, createClient, updateClient, statusClient, deleteClient}}>
            {children}
        </ClientContext.Provider>
    )
};