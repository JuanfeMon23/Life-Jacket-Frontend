import React, {useEffect, useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { useClients } from '../../Clients/context/clientsContext';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import {AiOutlinePlusCircle} from 'react-icons/Ai';
import { useSells } from '../context/sellsContext';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { ButtonAccept } from '../../components/ButtonAccept';
import { createSellRequest } from '../api/Sells.js';
import { toast } from "react-toastify";
import conection from '../../api/axios.js';


export function SaleRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , setValue, handleSubmit, formState:{errors}, control, reset} = useForm({
      defaultValues: {
        idClientSale: '',
        idVehicleSale: '',
        saleDepartment: '',
        saleMunicipality : '',
        saleDate : '',
        saleFinalPrice: '',
        salePecuniaryPenalty: '',
        saleLimitations: ''
      }
    });
    const {getSells} = useSells();
    const {clients} = useClients();
    const {vehicles, getVehicles} = useVehicles();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");

    const onSubmit = async  (data) => {
        try {
            const res = await createSellRequest(data);
            toast.success('Venta registrada con éxito!',{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500,
            });
            getSells();
            getVehicles();
            reset();
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message ,{
                position: toast.POSITION.TOP_CENTER,
                autoClose : 1500
            });
            console.log(error)
            throw new Error(error.message);
        }
    }; 

    const [departments, setDepartments] = useState([]);
    const [municipes, setMunicipes] = useState([]);
    const [selectedDepartment, setselectedDepartment] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const typesResponse = await fetch(`${import.meta.env.VITE_BACKEND}/Departments-departments`);
          const typesData = await typesResponse.json();
          setDepartments(typesData);
  
  
          if(selectedDepartment) {
            const municipesResponse = await fetch(`${import.meta.env.VITE_BACKEND}/Departments-municipes?department=${selectedDepartment}`);
            const municipesData = await municipesResponse.json();
            setMunicipes(municipesData);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [selectedDepartment]);

  return (
    <div className='flex'>
      <Button title='Agregar venta' endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>    
      <Modal isOpen={isOpen} scrollBehavior={scrollBehavior} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos de la venta</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col m-5 justify-center items-center'>
                        <Controller
                              name='idClientSale'
                              control={control}
                              rules={{
                                required : 'Campo requerido'
                              }}
                              render={({field}) => (
                                <Select
                                  {...field}
                                  label="Documento del cliente"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.idClientSale ? "danger" : ""}
                                  errorMessage={errors.idClientSale?.message}
                                  className="md:w-[23rem]"
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                  {clients.filter(client => client.clientStatus === "true").map((client) => (
                                    <SelectItem key={client.idClient} value={client.clientDocument}>
                                        {`${client.clientDocument} - ${client.clientName} ${client.clientLastName}`}
                                    </SelectItem>
                                  ))}
                                  </Select>
                              )}
                            />
                        </div>

                        <div className='flex flex-col m-5 justify-center items-center'>
                        <Controller
                              name='idVehicleSale'
                              control={control}
                              rules={{
                                required : 'Campo requerido'
                              }}
                              render={({field}) => (
                                <Select
                                  {...field}
                                  label="Placa del vehículo"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.idVehicleSale ? "danger" : ""}
                                  errorMessage={errors.idVehicleSale?.message}
                                  className="md:w-[23rem]"
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                {vehicles.filter(vehicles => vehicles.vehicleStatus === "true").map((vehicles) => (
                                    <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
                                        {`${vehicles.licensePlate} - ${vehicles.brand}`}
                                    </SelectItem>
                                  ))}
                                  </Select>
                              )}
                            />
                        </div>

                    <div className=' flex'> 
                      <div className='flex-col m-3 w-[200px]'>
                      <Controller
                          name="saleDepartment"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                setselectedDepartment(e.target.value);
                              }}
                              label="Departamento"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.saleDepartment ? "danger" : ""}
                              errorMessage={errors.saleDepartment?.message}
                              className="max-w-xs"
                            >
                              {departments.map((department) => (
                                <SelectItem key={department.Department} value={department.Department}>
                                  {department.Department}
                                </SelectItem>
                              ))

                              }

                            </Select>
                          )}
                        /> 
                      </div>

                      <div className='flex-col m-3 w-[200px]'>
                        <Controller
                            name="saleMunicipality"
                            control={control}
                            rules={{
                              required: "Campo requerido",
                            }}
                            render={({ field }) => (
                              <Select
                                {...field}
                                label="Ciudad o municipio"
                                variant="bordered"
                                endContent={<RequiredIcon/>}
                                color={errors.saleMunicipality ? "danger" : ""}
                                errorMessage={errors.saleMunicipality?.message}
                                className="max-w-xs"
                              >
                                {municipes.map((municipe) => (
                                  <SelectItem key={municipe.Municipe} value={municipe.Municipe}>
                                    {municipe.Municipe}
                                  </SelectItem>
                                ))}
                              </Select>
                            )}
                          />
                          </div>
                      </div>

                        <div className='flex flex-col m-2 justify-center items-center'>
                        <Controller
                              name="saleDate"
                              control={control}
                              rules={{
                                required : 'Campo requerido',
                                validate: value => {
                                  const currentDate = new Date();
                                  const selectedDate = new Date(value);
                                  if (selectedDate > currentDate) {
                                    return 'La fecha no puede ser mayor a la fecha actual';
                                  }
                                  const minDate = new Date().setDate(currentDate.getDate() - 15);
                                  if (selectedDate < minDate) {
                                    return 'La fecha no puede ser menor a 15 días antes de la fecha actual';
                                  }
                                  return true;
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="datetime-local"
                                  label="Fecha de venta"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.saleDate ? "danger" : ""}
                                  errorMessage={errors.saleDate?.message}
                                  className="md:w-[23rem]"
                                />
                            )}
                          /> 
                        </div>

                        <div className='flex flex-col m-5 justify-center items-center'>
                        <Controller
                              name="saleFinalPrice"
                              control={control}
                              rules={{
                                required: "Campo requerido",
                                minLength : {
                                  value : 5,
                                  message : 'Al menos 5 números'
                                },
                                maxLength : {
                                  value : 11,
                                  message : 'Máximo 11 números'
                                },
                                pattern: {
                                  value: /^[0-9]*$/, 
                                  message: "Solo números"
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="number"
                                  label="Precio de venta"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.saleFinalPrice? "danger" : ""}
                                  errorMessage={errors.saleFinalPrice?.message}
                                  className="md:w-[23rem]"
                                />
                              )}
                            />
                        </div>  
                    <div className='flex flex-col m-5 justify-center items-center'>
                    <Controller
                          name="salePecuniaryPenalty"
                          control={control}
                          rules={{
                            required: "Campo requerido"
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="number"
                              label="Sanción pecuniaria"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.salePecuniaryPenalty ? "danger" : ""}
                              errorMessage={errors.salePecuniaryPenalty?.message}
                              className="md:w-[23rem]"
                            />
                          )}
                        />
                    </div>

                    <div className='flex flex-col m-4 justify-center items-center'>
                    <Controller
                              name="saleLimitations"
                              control={control}
                              rules={{
                                required: "Campo requerido",
                                minLength: {
                                  value: 3,
                                  message: "Al menos 3 caracteres"
                                },
                                maxLength: {
                                  value: 200,
                                  message: "Máximo 200 caracteres"
                                },
                                pattern: {
                                  value: /^(?!.* {3})[^\s]+(?:\s[^\s]+)*$/,
                                  message: "No más de dos espacios consecutivos"
                                }
                              }}
                              render={({ field }) => (
                                <Textarea
                                  {...field}
                                  type="text"
                                  label="Limitaciones"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.saleLimitations ? "danger" : ""}
                                  errorMessage={errors.saleLimitations?.message}
                                  className="md:w-[23rem]"
                                />
                              )}
                            />
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
