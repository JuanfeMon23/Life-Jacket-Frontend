import React, { useEffect } from "react";
import { Title } from "../../components/globalComponents/Title";
import { ExchangeTable } from "../components/ExchangeTable";
import { useClients } from "../../Clients/context/clientsContext";
import { useVehicles } from "../../Vehicles/context/vehiclesContext";
import { useExchange } from "../context/ExchangeContext";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Login/context/AuthContext";

export function Exchangues() {
  const {getClients} = useClients();
  const {getVehicles} = useVehicles();
  const {getExchanges} = useExchange();
  const {user} = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    async function verificate(){
      if(!user.Licenses.includes('Cambios')){
        navigate('/DashBoard');
      }
    }
    verificate();
  },[])


  useEffect(() => {
    getExchanges();
    getClients();
    getVehicles();
  },[]);

  return (
    <div>
        <Title Title='Intercambios'/>
        <ExchangeTable/>
    </div>
  )
}

