import { createContext, useContext, useState } from "react";

import { createClientRequest, getClientRequest, getClientsRequest } from "../api/Clients";

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

    const getClient =  async (client) => {
        try {
            const res = await getClientRequest(client);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createClient = async (client) => {
        try {
            const res = await createClientRequest(client);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return(
        <ClientContext.Provider value={{clients, getClient, getClients, createClient}}>
            {children}
        </ClientContext.Provider>
    )
};