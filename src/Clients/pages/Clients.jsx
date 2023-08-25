import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { ClientRegister } from "../components/ClientRegister";

export function Clients() {

    return (
      <div className='flex '>
        <div>
          <Navigation/>
        </div>
        
        <div>
          {<Title Title='Clientes'/>}
          <ClientRegister/>


          <div className=" flex">
          </div>
           
        </div>
          
      </div>
    )
  }