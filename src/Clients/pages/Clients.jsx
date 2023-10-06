import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { ClientRegister } from "../components/ClientRegister";
import { useClients } from "../context/clientsContext";
import { CardClient } from "../components/CardClients";

export function Clients() {
    const {getClients} = useClients();

    useEffect(() => {
      getClients();
    }, [])


    return (
      <div className='flex '>
        <div>
          <Navigation/>
        </div>
        
        <div>
          {<Title Title='Clientes'/>}


          <div>
           <ClientRegister/>
            <CardClient/>
          </div>
           
        </div>
          
      </div>
    )
  }