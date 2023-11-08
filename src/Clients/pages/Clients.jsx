import { useEffect } from "react";
import { Title } from "../../components/globalComponents/Title";
import { useClients } from "../context/clientsContext";
import {TableClients} from "../components/TableClients";


export function Clients() {
    const {getClients} = useClients();

    useEffect(() => {
      getClients();
    }, [])


    return (    
        <div className="  flex">
          <div>
            {<Title Title='Clientes'/>}
            <div className="">
              <TableClients/>
            </div>

          </div>
           
        </div>
        
    )
  }