import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginRequest, verifytokenRequest } from "../api/Auht";


const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export function AuthProvider({children}){
    const [data, setData] = useState(null);
    const [autenticated, setautenticated] = useState(true);
    const [loading, setLoading] = useState(false);


    const login = async (data) => {
        try {
            const res = await loginRequest(data);
            setData(res.data);
            setautenticated(true);
            toast.success('Bienvenid@',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose : 1500
            });

        } catch (error) {
            toast.error(error.response.data.message,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            })
            throw new Error(error.message);
        }
    };


    const logout = () => {
        setData(null);
        setautenticated(false);
      };
      
      useEffect(() => {
        const checkLogin = async (req) => {
          const token = req.headers['authorization'];
          if (!token) {
            setautenticated(false);
            setLoading(false);
            return;
          }
      
          try {
            const res = await verifytokenRequest(token);
            if (!res.data) return setautenticated(false);
            setautenticated(true);
            setUser(res.data);
            setLoading(false);
          } catch (error) {
            setautenticated(false);
            setLoading(false);
          }
        };
        checkLogin();
       }, []);

    return (
        <AuthContext.Provider value={{data, login, logout, autenticated, loading} } >
            {children}
        </AuthContext.Provider>
    )
};