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

    const [selectedVehicleType, setSelectedVehicleType] = useState('');
    const [selectedModel, setSelectModel] = useState('');
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
                    <div className=' flex'> 
                        <Select className='m-1'
                            variant='underlined'
                            placeholder='Tipo de vehiculo'
                            id="vehicleType"
                            value={selectedVehicleType}
                            onChange={(e) => setSelectedVehicleType(e.target.value)}>
                              {vehicle.vehicleType.map((type) => (
                                <SelectItem key={type.type} value={type.type}  >  
                                  {type.type}
                                </SelectItem>
                              ))}
                          </Select>     
          
                        <Select className='m-1'
                          id="brand"
                          placeholder='Marca'
                          variant='underlined'
                          value={selectedBrand}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          disabled={!selectedVehicleType}
                        >
                          {selectedVehicleType &&
                            vehicle.vehicleType
                              .find((type) => type.type === selectedVehicleType)
                              .brand.map((brand) => (
                                <SelectItem key={brand.name} value={brand.name}>
                                  {brand.name}
                                </SelectItem>
                              ))}
                        </Select>                      
                    </div>

                    <div className='flex'>
                      <Select
                      className=' m-1'
                        id="line"
                        variant='underlined'
                        placeholder='Linea'
                        value={selectedLine}
                        onChange={(e) => setSelectedLine(e.target.value)}
                        disabled={!selectedBrand}
                      >
                        {selectedBrand &&
                          vehicle.vehicleType
                            .find((type) => type.type === selectedVehicleType)
                            .brand.find((brand) => brand.name === selectedBrand)
                            .line.map((line) => (
                              <SelectItem key={line} value={line}>
                                {line}
                              </SelectItem>
                            ))}
                      </Select>

                      <Select className='m-1'
                            id="model"
                            variant='underlined'
                            placeholder='Modelo'
                            >
                              {vehicle.model.map((model) => (
                                <SelectItem key={model} value={model}  >  
                                  {model}
                                </SelectItem>
                              ))}
                      </Select>                    
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
