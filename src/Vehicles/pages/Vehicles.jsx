import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { VehicleRegister } from "../components/VehicleRegister";
import { CardVehicle } from "../components/CardVehicle";
import { useVehicles } from "../context/vehiclesContext";
import { vehicle } from "../../../vehicles";
import { TableVehicles } from "../components/TableVehicles";


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
            <TableVehicles/>
          </div>
           
        </div>
          
      </div>
    )
  };
