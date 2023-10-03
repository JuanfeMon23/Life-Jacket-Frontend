import React from 'react'
import { vehicle } from '../../../vehicles.js'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { Select, SelectItem, Button } from '@nextui-org/react';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm  } from 'react-hook-form';
import { useVehicles } from '../context/vehiclesContext.jsx';
import { useState , useEffect} from 'react';
import {Input} from "@nextui-org/react";
import { useParams } from 'react-router-dom';

export  function VehicleRegister() {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}} = useForm();
    const {createVehicle, updateVehicle, getVehicle} = useVehicles();
    const params = useParams();


    const onSubmit = (data) => {
        try {
            if(params.idVehicle) {
                updateVehicle(params.idVehicle, {...data});
            } else {
                createVehicle({...data});
             }
          } catch (error) {
            console.log(error)
            throw new Error;
          }
    };

    const [selectedVehicleType, setSelectedVehicleType] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedLine, setSelectedLine] = useState('');


  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 top-5 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del Vehiculo</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex'>
                  <Select className='m-1'
                    {...register("vehicleType", { required: true })}
                    variant='underlined'
                    placeholder='Tipo de vehiculo'
                    id="vehicleType"
                    value={selectedVehicleType}
                    onChange={(e) => setSelectedVehicleType(e.target.value)}
                  >
                    {vehicleTypes.map((type) => (
                      <SelectItem key={type.VehicleType} value={type.VehicleType}>
                        {type.VehicleType}
                      </SelectItem>
                    ))}
                  </Select>

                  {selectedVehicleType && (
                    <Select className='m-1'
                      id="brand"
                      placeholder='Marca'
                      variant='underlined'
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      disabled={!selectedVehicleType}
                    >
                      {/* Aquí debes reemplazar "vehicle.vehicleType" con el valor correcto obtenido del servidor */}
                      {vehicleTypes
                        .find((type) => type.VehicleType === selectedVehicleType)
                        ?.brand.map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                    </Select>
                  )}
                </div>  

              <div className='flex'>
                {selectedBrand && (
                  <Select
                    className=' m-1'
                    id="line"
                    variant='underlined'
                    placeholder='Linea'
                    value={selectedLine}
                    onChange={(e) => setSelectedLine(e.target.value)}
                    disabled={!selectedBrand}
                  >
                    {vehicle.vehicleType
                      .find((type) => type.type === selectedVehicleType)
                      .brand.find((brand) => brand.name === selectedBrand)
                      .line.map((line) => (
                        <SelectItem key={line} value={line}>
                          {line}
                        </SelectItem>
                      ))}
                  </Select>
                )}

                <Select className='m-1'
                  id="model"
                  variant='underlined'
                  placeholder='Modelo'
                >
                  {vehicle.model.map((model) => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
                </Select>
              </div>   
 

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                        <Input type="text" label="Placa"  isClearable variant="underlined" id="licensePlate"
                        {...register("licensePlate" , {required : true})}/>
                        {errors.licensePlate && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>

                    <div className='flex-col m-3'>
                        <Input type="text" label="Tipo de vehiculo" isClearable variant="underlined" id='vehicleType'
                        {...register("vehicleType" , {required : true})}/>
                        {errors.vehicleType && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                        <Input type="text" label="Marca"  isClearable variant="underlined" id="brand"
                        {...register("brand" , {required : true})}/>
                        {errors.brand && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>

                    <div className='flex-col m-3'>
                        <Input type="number" label="Modelo" isClearable variant="underlined" id='model'
                        {...register("model" , {required : true})}/>
                        {errors.model && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                        <Input type="text" label="Tipo"  isClearable variant="underlined" id="type"
                        {...register("type" , {required : true})}/>
                        {errors.type && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>

                    <div className='flex-col m-3'>
                        <Input type="text" label="Linea" isClearable variant="underlined" id='line'
                        {...register("line" , {required : true})}/>
                        {errors.line && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                        <Input type="number" label="Kilometraje"  isClearable variant="underlined" id="mileage"
                        {...register("mileage")}/>
                    
                    </div>

                    <div className='flex-col m-3'>
                        <Input type="number" label="Cilindraje" isClearable variant="underlined" id='cylinderCapacity'
                        {...register("cylinderCapacity")}/>

                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                        <Input type="text" label="Combustible"  isClearable variant="underlined" id="fuel"
                        {...register("fuel")}/>
                    
                    </div>

                    <div className='flex-col m-3'>
                        <Input type="text" label="Tracción" isClearable variant="underlined" id='traction'
                        {...register("traction")}/>

                    </div>
                  </div>

                  
                  <div className=" flex">
                    <div className=' flex-col m-3'>
                        <Input type="date" label="Soat"  isClearable variant="underlined" id="soat"
                        {...register("soat")}/>
                    
                    </div>

                    <div className='flex-col m-3'>
                        <Input type="date" label="Tecnomecanica" isClearable variant="underlined" id='technomechanics'
                        {...register("technomechanics")}/>

                    </div>
                  </div>
                  
                  <div>
                        <Input type="text" label="Correa dentada" isClearable variant="underlined" id='timingBelt'
                        {...register("timingBelt")}/>
                  </div>

                  {/* <ModalHeader className='flex flex-col gap-3 m-5'>Más información del vehículo</ModalHeader>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Input type="text" label="Empresa" isClearable variant="underlined" id='business'
                            {...register("business")}/>
                    </div>

                    <div className='flex-col m-3'>
                      <Input type="Empresa" label="Correa dentada" isClearable variant="underlined" id='series'
                            {...register("series")}/>
                    </div>

                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Input type="text" label="Color" isClearable variant="underlined" id='color'
                            {...register("color")}/>
                    </div>

                    <div className='flex-col m-3'>
                      <Input type="text" label="Motor" isClearable variant="underlined" id='motor'
                            {...register("motor")}/>
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Input type="text" label="Matricula a nombre dé" isClearable variant="underlined" id='register'
                            {...register("register")}/>
                    </div>

                    <div className='flex-col m-3'>
                      <Input type="number" label="Numero de cedula" isClearable variant="underlined" id='identificationCard'
                            {...register("identificationCard")}/>
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Input type="text" label="Chasis" isClearable variant="underlined" id='chassis'
                            {...register("chassis")}/>
                    </div>

                    <div className='flex-col m-3'>
                      <Input type="number" label="Capacidad" isClearable variant="underlined" id='capacity'
                            {...register("capacity")}/>
                    </div>
                  </div>
                  <div className=' flex'>
                    <div className='flex-col m-3 w-[200px]'>
                        <Select variant="underlined" label='Servicio' id='service' {...register("service")} >
                          <SelectItem key='Publico'>Publico</SelectItem>
                          <SelectItem key='Privado'>Privado</SelectItem>
                        </Select>
                    </div>
                  </div> */}

                  <div className=' text-center my-3 '>
                    <ButtonAccept/>
                  </div>
                  
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
