import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createImprovementsRequest,  statusImprovementRequest, getImprovementesRequest } from "../api/Improvements";

const ImprovementContext = createContext();

export const useImprovements = () => {
    const context = useContext(ImprovementContext);
    return context;
};

export function ImprovementProvider({children}){
    const [improvements, setImprovements] = useState([]);
    
    const getImprovements = async () => {
        try {
            const res = await getImprovementesRequest();
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
            getImprovements();
            return res.data;
        } catch (error) {
            toast.error('Error al crear.' ,{
                position: toast.POSITION.TOP_CENTER
            });
            console.log(error);
            throw new Error(error.message);
        }
    };

    const statusImprovement = async (idImprovement) => {
        try {
            await statusImprovementRequest(idImprovement);
            toast.success('Cambio de estado con exito!',{
                position: toast.POSITION.TOP_CENTER
            });
            getImprovements();
        } catch (error) {
            toast.error('Error' ,{
                position: toast.POSITION.TOP_CENTER
            });
            throw new Error(error.message); 
        }
    };

    return(
        <ImprovementContext.Provider value={{improvements, getImprovements, createImprovement, statusImprovement}}>
            {children}
        </ImprovementContext.Provider>
    )
}