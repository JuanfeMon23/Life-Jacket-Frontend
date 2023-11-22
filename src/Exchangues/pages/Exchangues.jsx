import React, { useEffect } from "react";
import { Title } from "../../components/globalComponents/Title";
import { ExchangeTable } from "../components/ExchangeTable";
import { useClients } from "../../Clients/context/clientsContext";
import { useVehicles } from "../../Vehicles/context/vehiclesContext";
import { useExchange } from "../context/ExchangeContext";

export function Exchangues() {
  const {getClients} = useClients();
  const {getVehicles} = useVehicles();
  const {getExchanges} = useExchange();


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

