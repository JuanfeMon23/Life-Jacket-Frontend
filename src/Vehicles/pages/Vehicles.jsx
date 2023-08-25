import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { VehicleRegister } from "../context/VehicleRegister";

export function Vehicles() {

    return (
      <div className='flex '>
        <div>
          <Navigation/>
        </div>
        
        <div>
          {<Title Title='Vehículos'/>}

          <div className=" flex">
            <VehicleRegister/>
          </div>
           
        </div>
          
      </div>
    )
  };
