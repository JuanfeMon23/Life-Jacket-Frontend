import React, { useEffect, useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Select, SelectItem, Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm , Controller } from 'react-hook-form';
import { useVehicles } from '../context/vehiclesContext.jsx';
import { toast } from "react-toastify";
import {Input} from "@nextui-org/react";
import {AiTwotoneEdit} from 'react-icons/Ai';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { years } from './years.js';

export  function EditVehicle (props) {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}, control} = useForm();
    const {updateVehicle} = useVehicles();
    const vehicles = props.vehicle;


    const onSubmit = (data) => {
        updateVehicle(vehicles.idVehicle, data);
    };

    function handleEdit(event){
      event.preventDefault();
      toast.error('No puedes editar un vehículo inhabilitado.' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    }

    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [vehicleBrands, setVehicleBrands] = useState([]);
    const [vehicleLines, setVehicleLines] = useState([]);
    const [selectedVehicleType, setSelectedVehicleType] = useState('');
    const [selectedBrandName, setSelectedBrandName] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const typesResponse = await fetch('http://localhost:3000/api/vehicle-types');
          const typesData = await typesResponse.json();
          setVehicleTypes(typesData);
   
          if (selectedVehicleType) {
            const brandsResponse = await fetch(`http://localhost:3000/api/vehicles-brand?vehicleType=${selectedVehicleType}`);
            const brandsData = await brandsResponse.json();
            setVehicleBrands(brandsData);
  
            if (selectedBrandName) {
              const linesResponse = await fetch(`http://localhost:3000/api/vehicles-lines?vehicleType=${selectedVehicleType}&brandName=${selectedBrandName}`);
              const linesData = await linesResponse.json();
              setVehicleLines(linesData);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
  
      fetchData();
    }, [selectedVehicleType, selectedBrandName]);
  return (
    <div className='flex'>
    {vehicles.vehicleStatus === "true" ?<Button title='Editar vehículo' isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] mr-2 rounded-lg text-white font-bold'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
    : <Button  title='Editar vehículo' className=' mr-2'onClick={handleEdit} isIconOnly><AiTwotoneEdit className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Editar vehículo</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' flex '>
                  <div className=' flex-col m-3'>
                    <Controller
                          name="color"
                          control={control}
                          defaultValue={vehicles.color}
                          rules={{
                            required: "Campo requerido",
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Color"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.color ? "danger" : ""}
                              errorMessage={errors.color?.message}
                              className="max-w-xs"
                            />
                          )}
                        />      
                    </div>
                    <div className=' flex-col m-3'>
                    <Controller
                          name="timingBelt"
                          control={control}
                          defaultValue={vehicles.timingBelt}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Correa dentada"
                              variant="bordered"
                              color={errors.timingBelt ? "danger" : ""}
                              errorMessage={errors.timingBelt?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3 w-[200px]'>
                    <Controller
                        name="mileage"
                        control={control}
                        defaultValue={vehicles.mileage}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Kilometraje"
                            variant="bordered"
                            color={errors.mileage? "danger" : ""}
                            errorMessage={errors.mileage?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                        name="cylinderCapacity"
                        control={control}
                        defaultValue={vehicles.cylinderCapacity}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Cilindraje"
                            variant="bordered"
                            color={errors.cylinderCapacity? "danger" : ""}
                            errorMessage={errors.cylinderCapacity?.message}
                            className="max-w-xs"
                          />
                        )}
                      />

                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                          name="fuel"
                          control={control}
                          defaultValue={vehicles.fuel}
                          rules={{
                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Combustible"
                              variant="bordered"
                              color={errors.fuel ? "danger" : ""}
                              errorMessage={errors.fuel?.message}
                              className="max-w-xs"
                            />
                          )}
                        />            
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="traction"
                          defaultValue={vehicles.traction}
                          control={control}
                          rules={{

                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Tracción"
                              variant="bordered"
                              color={errors.traction ? "danger" : ""}
                              errorMessage={errors.traction?.message}
                              className="max-w-xs"
                            />
                          )}
                        />  
                    </div>
                  </div>

                  
                    <div className='flex flex-col m-3 justify-center items-center'>
                      <Controller
                            name="soat"
                            defaultValue={vehicles.soat}
                            control={control}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="date"
                                label="Soat"
                                variant="bordered"
                                color={errors.soat ? "danger" : ""}
                                errorMessage={errors.soat?.message}
                                className=" md:w-[22rem]"
                              />
                            )}
                          /> 
                    
                    </div>

                    <div className='flex flex-col m-3 justify-center items-center'>
                    <Controller
                          name="technomechanics"
                          defaultValue={vehicles.technomechanics}
                          control={control}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="date"
                              label="Tecnomecánica"
                              variant="bordered"
                              color={errors.technomechanics ? "danger" : ""}
                              errorMessage={errors.technomechanics?.message}
                              className=" md:w-[22rem]"
                            />
                          )}
                        /> 

                    </div>
                  

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                    <Controller
                          name="business"
                          defaultValue={vehicles.othervehicleinformation.business}
                          control={control}
                          rules={{
                            minLength: {
                              value: 3,
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 20,
                              message: "Máximo 20 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Empresa"
                              variant="bordered"
                              color={errors.business ? "danger" : ""}
                              errorMessage={errors.business?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>
                    <div className='flex-col m-3'>
                      <Controller
                            name="series"
                            defaultValue={vehicles.othervehicleinformation.series}
                            control={control}
                            rules={{
                              minLength: {
                                value: 7,
                                message: "Al menos 7 caracteres"
                              },
                              maxLength: {
                                value: 17,
                                message: "Máximo 17 caracteres"
                              }
                            }}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                label="Serie"
                                variant="bordered"
                                color={errors.series ? "danger" : ""}
                                errorMessage={errors.series?.message}
                                className="max-w-xs"
                              />
                            )}
                          /> 
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Controller
                              name="motor"
                              control={control}
                              defaultValue={vehicles.othervehicleinformation.motor}
                              rules={{
                                minLength: {
                                  value: 7,
                                  message: "Al menos 7 caracteres"
                                },
                                maxLength: {
                                  value: 12,
                                  message: "Máximo 12 caracteres"
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="text"
                                  label="Motor"
                                  variant="bordered"
                                  color={errors.motor ? "danger" : ""}
                                  errorMessage={errors.motor?.message}
                                  className="max-w-xs"
                                />
                              )}
                          />
                    </div>
                    <div className='flex-col m-3'>
                      <Controller
                                name="chassis"
                                defaultValue={vehicles.othervehicleinformation.chassis}
                                control={control}
                                rules={{
                                  minLength: {
                                    value: 7,
                                    message: "Al menos 7 caracteres"
                                  },
                                  maxLength: {
                                    value: 18,
                                    message: "Máximo 18 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="text"
                                    label="Chasis"
                                    variant="bordered"
                                    color={errors.chassis ? "danger" : ""}
                                    errorMessage={errors.chassis?.message}
                                    className="max-w-xs"
                                  />
                                )}
                            />
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                        <Controller
                                  name="identificationCard"
                                  defaultValue={vehicles.othervehicleinformation.identificationCard}
                                  control={control}
                                  rules={{
                                    minLength: {
                                      value: 7,
                                      message: "Al menos 7 caracteres"
                                    },
                                    maxLength: {
                                      value: 12,
                                      message: "Máximo 12 caracteres"
                                    }
                                  }}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      type="number"
                                      label="Cédula del propietario"
                                      variant="bordered"
                                      color={errors.identificationCard ? "danger" : ""}
                                      errorMessage={errors.identificationCard?.message}
                                      className="max-w-xs"
                                    />
                                  )}
                              />
                    </div>
                    <div className='flex-col m-3'>
                      <Controller
                                name="register"
                                control={control}
                                defaultValue={vehicles.othervehicleinformation.register}
                                rules={{
                                  minLength: {
                                    value: 7,
                                    message: "Al menos 7 caracteres"
                                  },
                                  maxLength: {
                                    value: 20,
                                    message: "Máximo 20 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="text"
                                    label="Matrícula a nombre de"
                                    variant="bordered"
                                    color={errors.register ? "danger" : ""}
                                    errorMessage={errors.register?.message}
                                    className="max-w-xs"
                                  />
                                )}
                            />
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3 w-[200px]'>
                      <Controller
                                name="capacity"
                                defaultValue={vehicles.othervehicleinformation.capacity}
                                control={control}
                                rules={{
                                  minLength: {
                                    value: 1,
                                    message: "Al menos 1 caracter"
                                  },
                                  maxLength: {
                                    value: 2,
                                    message: "Máximo 2 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="number"
                                    label="Capacidad"
                                    variant="bordered"
                                    color={errors.capacity ? "danger" : ""}
                                    errorMessage={errors.capacity?.message}
                                    className="max-w-xs"
                                  />
                                )}
                            />
                    </div>
                    <div className='flex-col m-3 w-[200px] '>
                      <Controller
                            name='service'
                            defaultValue={vehicles.othervehicleinformation.service}
                            control={control}
                            rules={{
                            }}
                            render={({field}) => (
                              <Input
                                {...field}
                                label="Servicio"
                                variant="bordered"
                                color={errors.service ? "danger" : ""}
                                errorMessage={errors.service?.message}
                                className="max-w-xs"
                                onChange={(e) => {
                                  field.onChange(e);
                                }}
                              />
                            )}
                          />
                    </div>
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
