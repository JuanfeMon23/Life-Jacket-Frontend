import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createImprovementsRequest, getImprovementesRequest, editImprovementRequest, deleteImprovementRequest } from "../api/Improvements";

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
            toast.success('Mejora registrada con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
            });
            getImprovements();
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
            });
            console.log(error);
            throw new Error(error.message);
        }
    };


    const editImprovement = async (idImprovement, improvement) => {
        try {
            await editImprovementRequest(idImprovement, improvement);
            toast.success('Mejora actualizada  con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose :1500
            });
            getImprovements();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            throw new Error(error.message);
        }
    };

    const deleteImprovement = async (idImprovements) => {
        try {
            await deleteImprovementRequest(idImprovements);
            toast.success('Mejora eliminada con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500
            });
            getImprovements();
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            console.log(error)
            throw new Error(error.message);
        }
    };

    return(
        <ImprovementContext.Provider value={{improvements, getImprovements, createImprovement, editImprovement, deleteImprovement}}>
            {children}
        </ImprovementContext.Provider>
    )
}
