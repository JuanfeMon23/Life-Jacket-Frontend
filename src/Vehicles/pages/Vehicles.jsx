import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { VehicleRegister } from "../components/VehicleRegister";


export function Vehicles() {

    return (
      <div className='flex '>
        <div>
          <Navigation/>
        </div>
        
        <div>
          {<Title Title='Vehículos'/>}
          <VehicleRegister/>
          <div className=" flex">
            
          </div>
           
        </div>
          
      </div>
    )
  };
