import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { useImprovements } from '../context/improvementsContext';
import {ImprovementRegister} from '../components/ImprovementRegister';


export function Improvements() {
    const {getImprovements} = useImprovements();

    useEffect(() => {
        getImprovements();
    },[])
  return (
    <div className=' flex'>
        <div>
            <Navigation/>
        </div>

        <div>
            {<Title Title='Mejoras'/>}
            <ImprovementRegister/>
        </div>
    </div>
  )
}
