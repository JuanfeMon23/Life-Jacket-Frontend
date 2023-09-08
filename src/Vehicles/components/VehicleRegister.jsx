import React from 'react'
import { vehicle } from '../../../vehicles.js'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { Select, SelectItem, Button } from '@nextui-org/react';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm  } from 'react-hook-form';
import { useVehicles } from '../context/vehiclesContext.jsx';
import { useState , useEffect} from 'react';

export  function VehicleRegister() {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}} = useForm();
    const {createVehicle, updateVehicle, getVehicle} = useVehicles();


    const onSubmit = (data) => {
        try {
            if(params.idVehicle) {
                updateVehicle(params.idVehicle, {...data});
            } else {
                createVehicle({...data});
             }
          } catch (error) {
            throw new Error;
          }
    };


    const [selectedType, setSelectedType] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedLine, setSelectedLine] = useState(null);
    
    const handleTypeChange = (value) => {
      setSelectedType(value);
      setSelectedBrand(null);
      setSelectedLine(null);
    }
    
    const handleBrandChange = (value) => {
      setSelectedBrand(value);
      setSelectedLine(null);
    }
    
    const handleLineChange = (value) => {
      setSelectedLine(value);
    }

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

                    <Select label='Tipo de vehiculo' variant='underlined' value={selectedType} onChange={handleTypeChange} {...register('type')}>
                      {vehicle.vehicleType.map((type, index) => (
                        <SelectItem key={index} value={type.type}>{type.type}</SelectItem>
                      ))}
                    </Select>


                  {selectedType && (
                    
                      <Select label='Marca' value={selectedBrand} onChange={handleBrandChange} {...register('brand')}>
                        {vehicle.vehicleType.find((type) => type.type === selectedType)?.brand.map((brand, index) => (
                          <SelectItem key={index} value={brand.name}>{brand.name}</SelectItem>
                        ))}
                      </Select>
                    
                  )}
                  {selectedBrand && (
                    
                      <Select label='Linea' value={selectedLine} onChange={handleLineChange} {...register('line')}>
                        {vehicle.vehicleType.find((type) => type.type === selectedType)?.brand.find((brand) => brand.name === selectedBrand)?.line.map((line, index) => (
                          <SelectItem key={index} value={line}>{line}</SelectItem>
                        ))}
                      </Select>
                    
                  )}

                  <div className=" flex">
                    
                  </div>
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
