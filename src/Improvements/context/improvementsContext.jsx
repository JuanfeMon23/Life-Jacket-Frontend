import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createImprovementsRequest } from "../api/Improvements";

const ImprovementContext = createContext();

export const useImprovements = () => {
    const context = useContext(ImprovementContext);
    return context;
};

export function ImprovementProvider({children}){
    const [improvements, setImprovements] = useState([]);
    
    const getImprovements = async () => {
        try {
            const res = await getImprovements();
            setImprovements(res.data);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const createImprovement = async (improvement) => {
        try {
            const res = await createImprovementsRequest(improvement);
            toast.success('Mejora creada con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            return res.data;
        } catch (error) {
            toast.error('Error al crear.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            console.log(error);
            throw new Error(error.message);
        }
    };

    return(
        <ImprovementContext.Provider value={{improvements, getImprovements, createImprovement}}>
            {children}
        </ImprovementContext.Provider>
    )
}