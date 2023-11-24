import React from 'react'
import { useEffect } from "react";
import { Title } from "../../components/globalComponents/Title";
import { useImprovements } from '../context/improvementsContext';
import { TableImpovements } from '../components/TableImpovements';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Login/context/AuthContext";

export function Improvements() {
    const {getImprovements} = useImprovements();
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      async function verificate(){
        if(!user.Licenses.includes('Mejoras')){
          navigate('/DashBoard');
        }
      }
      verificate();
    },[])

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
