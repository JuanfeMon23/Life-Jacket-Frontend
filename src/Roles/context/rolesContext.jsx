import { createContext, useContext, useState } from "react";

import { createRolRequest, getRolRequest, getRolesRequest, updateRolRequest , deleteRolRequest } from "../api/Roles";

const RolesContext = createContext();

export const userRoles = () => {
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
}