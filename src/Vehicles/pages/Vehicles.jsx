import { useEffect } from "react";
import { Title } from "../../components/globalComponents/Title";
import { useVehicles } from "../context/vehiclesContext";
import { TableVehicles } from "../components/TableVehicles";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Login/context/AuthContext";


export function Vehicles() {
    const {getVehicles} = useVehicles();
    const {user} = useAuth();
    const navigate = useNavigate();
    
    
    useEffect(() => {
      async function verificate(){
        if(!user.Licenses.includes('Vehiculos')){
          navigate('/DashBoard');
        }
      }
      verificate();
    },[])


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
