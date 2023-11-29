import React, {useEffect} from 'react'
import { Title } from "../../components/globalComponents/Title";
import { useVehicles } from "../context/vehiclesContext";
import { TableBrands } from '../components/Brands/TableBrands';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Login/context/AuthContext';

export  function Brands() {
    const {getBrands} = useVehicles();
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
        getBrands();
    },[])
  return (
    <div className=' flex'>
        <div>
            {<Title Title='Gestión de marcas'/>}
            <div>
                <TableBrands/>
            </div>
        </div>
      
    </div>
  )
}
