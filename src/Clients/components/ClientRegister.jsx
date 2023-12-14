import React, { useEffect , useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm, Controller} from 'react-hook-form';
import { useClients } from '../context/clientsContext';
import { Select, SelectItem } from '@nextui-org/react';
import {AiOutlinePlusCircle} from '../../../node_modules/react-icons/ai';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { createClientRequest } from '../api/Clients.js';
import { toast } from "react-toastify";
import conection from '../../api/axios.js';

export  function ClientRegister() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {register , handleSubmit, setValue,  formState:{errors}, control, reset} = useForm({
    defaultValues: {
      clientTypeDocument: '',
      clientDocument: '',
      clientDepartment: '',
      clientMunicipality: '',
      clientName: '',
      clientLastName: '',
      clientAddress: '',
      clientOtherContact: '',
      clientPhoneNumber: '',
      clientOtherPhoneNumber: ''
    }
  });
  
  const {getClients} = useClients();

  const onSubmit = async (data) => {
      try {
          const res = await createClientRequest(data);
          toast.success('Cliente registrado con éxito!',{
              position: toast.POSITION.TOP_CENTER,
              autoClose : 1500
          });
          getClients();
          reset();
          return res.data;
      } catch (error) {
          toast.error(error.response.data.message ,{
              position: toast.POSITION.TOP_CENTER,
              autoClose : 1500
          });
          throw new Error(error.message);
      }
  };

  const [departments, setDepartments] = useState([]);
  const [municipes, setMunicipes] = useState([]);
  const [selectedDepartment, setselectedDepartment] = useState('');
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

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
         <Button title='Agregar cliente' endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>
      <Modal isOpen={isOpen} scrollBehavior={scrollBehavior} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del cliente</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=' flex'>
                    <div className=' flex-col m-3 w-[200px]'>
                    <Controller
                          name='clientTypeDocument'
                          control={control}
                          rules={{
                            required : 'Campo requerido'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
                              label="Tipo de documento"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.clientTypeDocument ? "danger" : ""}
                              errorMessage={errors.clientTypeDocument?.message}
                              className="max-w-xs"
                              onChange={(e) => {
                                field.onChange(e);
                              }}
                            >
                              <SelectItem key='CC'>Cédula de ciudadanÍa</SelectItem>
                            </Select>
                          )}
                        />

                    </div>
                    <div className=' flex-col m-3'>
                    <Controller
                        name="clientDocument"
                        control={control}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 numeros'
                          },
                          maxLength : {
                            value : 15 ,
                            message : 'Máximo 15 números'
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
                            label="Documento"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
                            color={errors.clientDocument? "danger" : ""}
                            errorMessage={errors.clientDocument?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>

                  </div>

                  <div className=' flex'> 
                      <div className='flex-col m-3 w-[200px]'>
                      <Controller
                          name="clientDepartment"
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
                              color={errors.clientDepartment ? "danger" : ""}
                              errorMessage={errors.clientDepartment?.message}
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
                            name="clientMunicipality"
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
                                color={errors.clientMunicipality ? "danger" : ""}
                                errorMessage={errors.clientMunicipality?.message}
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
                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                          name="clientName"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Máximo 40 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Nombres"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.clientName ? "danger" : ""}
                              errorMessage={errors.clientName?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="clientLastName"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Máximo 40 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Apellidos"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.clientLastName ? "danger" : ""}
                              errorMessage={errors.clientLastName?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>

                  </div>

                  <div className=' flex'>
                    <div className=' flex-col m-3'>
                      <Controller
                            name="clientAddress"
                            control={control}
                            rules={{
                              required: "Campo requerido"
                            }}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                label="Dirección"
                                variant="bordered"
                                endContent={<RequiredIcon/>}
                                color={errors.clientAddress ? "danger" : ""}
                                errorMessage={errors.clientAddress?.message}
                                className="max-w-xs"
                              />
                            )}
                          />
                    </div>
                    <div className=' flex-col m-3'>
                      <Controller
                              name="clientOtherContact"
                              control={control}
                              rules={{
                                required: "Campo requerido",
                                minLength: {
                                  value: 3,
                                  message: "Al menos 3 caracteres"
                                },
                                maxLength: {
                                  value: 40,
                                  message: "Máximo 40 caracteres"
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
                                  label="Otro contacto"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.clientOtherContact ? "danger" : ""}
                                  errorMessage={errors.clientOtherContact?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                  </div>

                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'> 
                    <Controller
                        name="clientPhoneNumber"
                        control={control}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 números'
                          },
                          maxLength : {
                            value : 12,
                            message : 'Máximo 12 números'
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
                            label="Teléfono"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
                            color={errors.clientPhoneNumber? "danger" : ""}
                            errorMessage={errors.clientPhoneNumber?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>

                    <div className=' flex-col m-3'>
                    <Controller
                        name="clientOtherPhoneNumber"
                        control={control}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 números'
                          },
                          maxLength : {
                            value : 12,
                            message : 'Máximo 12 números'
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
                            label="Otro teléfono"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
                            color={errors.clientOtherPhoneNumber? "danger" : ""}
                            errorMessage={errors.clientOtherPhoneNumber?.message}
                            className="max-w-xs"
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
