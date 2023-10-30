import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { VehicleRegister } from "../components/VehicleRegister";
import { CardVehicle } from "../components/CardVehicle";
import { useVehicles } from "../context/vehiclesContext";
import { vehicle } from "../../../vehicles";


export function Vehicles() {
    const {getVehicles} = useVehicles();

    useEffect(() => {
      getVehicles();
    },[])

    return (
      <div className='flex '>        
        <div>
          {<Title Title='Vehículos'/>}
          <div>
            <VehicleRegister vehicle={vehicle}/>
            <CardVehicle/>
          </div>
           
        </div>
          
      </div>
    )
  };
