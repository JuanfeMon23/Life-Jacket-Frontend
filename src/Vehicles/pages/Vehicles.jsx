import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { VehicleRegister } from "../components/VehicleRegister";
import { CardVehicle } from "../components/CardVehicle";
import { useVehicles } from "../context/vehiclesContext";


export function Vehicles() {
    const {getVehicles} = useVehicles();

    useEffect(() => {
      getVehicles();
    },[])

    return (
      <div className='flex '>
        <div>
          <Navigation/>
        </div>
        
        <div>
          {<Title Title='Vehículos'/>}


          <div>
            <VehicleRegister/>
            <CardVehicle/>
          </div>
           
        </div>
          
      </div>
    )
  };
