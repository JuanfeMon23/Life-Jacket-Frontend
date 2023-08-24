import { createContext, useContext, useState } from "react";

import { createUserRequest, getUserRequest, getUsersRequest, updateUserRequest, deleteUserRequest, searchUserRequest } from "../api/Users.js";

const UserContext = createContext();

export const useUsers = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('UserContext debe ser usado con un UserProvider');
    return context;
 };

export function UserProvider ({children}) {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await getUsersRequest();
            setUsers(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const getUser = async (user) => {
        try {
            const res = await getUserRequest(user);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const searchUser = async (idUser, idEmal, userName) => {
        try {
            const res = await searchUserRequest(idUser, idEmal, userName);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createUser = async (user) => {
        try {
            const res = await createUserRequest(user);
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const updateUser = async (idUser, User) => {
        try {
            await updateUserRequest(idUser, User);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const deleteUser = async (idUser) => {
        try {
            const res = await deleteUserRequest(idUser);
            if(res.status === 204) setUsers(users.filter((user) => user.id !== idUser));
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <UserContext.Provider
        value={{users,getUser,getUsers,createUser,updateUser,deleteUser,searchUser
        }}
        >
            {children}         
        </UserContext.Provider>
    );


}