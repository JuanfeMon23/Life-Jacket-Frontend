import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginRequest, verifyTokenRequest } from "../api/Auht";
import Cookies from "js-cookie";


const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [isAutenticated, setIsAutenticated] = useState(false);
  const [loading, setLoading] = useState(true);


    const login = async (data) => {
        try {
            const res = await loginRequest(data);
            setIsAutenticated(true);
            setUser(res.data);
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

    useEffect(() => {
      async function checkLogin(){
          const cookies = Cookies.get();

          if(!cookies.token) {
              setIsAutenticated(false);
              setLoading(false);
              return setUser(null);
          };

          try {
              const res = await verifyTokenRequest(cookies.token);
              if(!res.data){
                  setIsAutenticated(false);
                  setLoading(false);
              }

              setIsAutenticated(true);
              setUser(res.data);
              setLoading(false);
          } catch (error) {
              setIsAutenticated(false);
              setUser(null);
          }
      }
      checkLogin();
  }, [])


    
    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAutenticated(false);
    };

    return (
        <AuthContext.Provider value={{user, login, logout, isAutenticated, loading, loading} } >
            {children}
        </AuthContext.Provider>
    )
};