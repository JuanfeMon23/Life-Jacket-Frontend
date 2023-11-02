import React from 'react'
import { Select, SelectItem, Button } from '@nextui-org/react';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm , Controller } from 'react-hook-form';
import {Input} from "@nextui-org/react";
import { useVehicles } from '../context/vehiclesContext.jsx';

export  function VehicleDetail() {
    const { handleSubmit : handleSubmitVehicle, formState : {errors}, control : controlVehicle, reset : resetVehicle} = useForm();
    const {createVehicleDetail, vehicles} = useVehicles();

    const handleDetail = (data) => {
        {handleDetail ? createVehicleDetail(data) && resetVehicle : 2 }
        console.log(data)
      };

  return (
    <div>
        <form onSubmit={handleSubmitVehicle(handleDetail)}>
  

                  <div className=' text-center my-3 '>
                    <ButtonAccept/>
                  </div>
                
                </form>  
    </div>
  )
}
