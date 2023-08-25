import { createContext, useContext, useState } from "react";

import { createRolRequest, getRolRequest, getRolesRequest, updateRolRequest , deleteRolRequest } from "../api/Roles";

const RolesContext = createContext();

export const useRoles = () => {
    const context = useContext(RolesContext);
    return context;
};

export function RolesProvider({children}) {
    const [roles , setRoles] = useState([]);

    const getRoles = async () => {
        try {
            const res = await getRolesRequest();
            setRoles(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const getRol = async (roles) => {
        try {
            const res = await getRolRequest();
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createRol = async (roles) => {
        try {
            const res = await createRolRequest(roles);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const updateRol = async (idroles, roles) => {
        try {
            await updateRolRequest(idroles, roles);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const deleteRol = async (roles) => {
        try {
            const res = await deleteRolRequest(roles);
            if(res.status === 204) setRoles(roles.filter((roles) => roles.id !== roles))
        } catch (error) {
            
        }
    };

    return(
        <RolesContext.Provider 
        value={{roles, getRol, getRoles, createRol, updateRol, deleteRol}}
        >
            {children}
        </RolesContext.Provider>
    )
}