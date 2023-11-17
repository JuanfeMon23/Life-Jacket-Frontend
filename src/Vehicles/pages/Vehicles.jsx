import { useEffect } from "react";
import { Title } from "../../components/globalComponents/Title";
import { useVehicles } from "../context/vehiclesContext";
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
