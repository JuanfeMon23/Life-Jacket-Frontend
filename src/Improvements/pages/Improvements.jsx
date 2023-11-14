import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { useImprovements } from '../context/improvementsContext';
import {ImprovementRegister} from '../components/ImprovementRegister';
import { TableImpovements } from '../components/TableImpovements';

export function Improvements() {
    const {getImprovements} = useImprovements();

    useEffect(() => {
        getImprovements();
    },[])
  return (
    <div className=' flex'>
        <div>
            {<Title Title='Mejoras'/>}
            <div>
                <TableImpovements/> 
            </div>
        </div>


    </div>
  )
}
