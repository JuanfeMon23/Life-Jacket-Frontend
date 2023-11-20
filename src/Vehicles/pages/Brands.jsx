import React, {useEffect} from 'react'
import { Title } from "../../components/globalComponents/Title";
import { useVehicles } from "../context/vehiclesContext";
import { TableBrands } from '../components/Brands/TableBrands';

export  function Brands() {
    const {getBrands} = useVehicles();

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
