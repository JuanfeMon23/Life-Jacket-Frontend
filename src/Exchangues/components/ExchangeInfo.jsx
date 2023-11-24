import React, { useEffect } from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import {Input, Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { useExchange } from '../context/ExchangeContext';
import { useClients } from '../../Clients/context/clientsContext';
import { useNavigate } from 'react-router-dom';

export  function ExchangeInfo(props) {
    const { handleSubmit, formState:{errors}, control, reset} = useForm();
    const {updateExchange, cancelExchange, createExchange} = useExchange();
    const {clients, getClients} = useClients();
    const navigate = useNavigate();
    const idExchange = props.idExchange

    console.log(idExchange)

    useEffect(() => {
        getClients();
  
    },[])

 
    function onSubmit(data){
        updateExchange(idExchange, data)
    };

    function handleCancelExchange(event) {
        event.preventDefault();
        cancelExchange(idExchange)
        navigate('/Exchangues')
    }

  return (
    <aside className=' border-2 border-blue-600/70 bg-white rounded-lg w-[22rem] ml-5'>
        <h1 className=' text-3xl text-center font-bold m-5'>Datos del cambio</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' ml-3 mb-3 '>
                    <Controller
                              name='idClientExchange'
                              control={control}
                              rules={{
                                required : 'Campo requerido'
                              }}
                              render={({field}) => (
                                <Select
                                  {...field}
                                  label="Documento del cliente"
                                  variant="bordered"
                                  color={errors.idClientExchange ? "danger" : ""}
                                  errorMessage={errors.idClientExchange?.message}
                                  className="max-w-xs"
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                  {clients.filter(client => client.clientStatus === "true").map((client) => (
                                    <SelectItem key={client.idClient} value={client.clientDocument}>
                                        {client.clientDocument}
                                    </SelectItem>
                                  ))}
                                  </Select>
                              )}
                            />
                </div>
                <div className=' ml-3  md:mb-3'>
                        <Controller
                            name="exchangeDate"
                            control={control}
                            rules={{
                                required : 'Campo obligatorio',
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
                            label="Fecha del cambio"
                             variant="bordered"
                            color={errors.exchangeDate ? "danger" : ""}
                            errorMessage={errors.exchangeDate?.message}
                            className="max-w-xs"
                        />
                    )}
                 /> 
            </div>
            <div className="flex ">
                    <div className=' flex-col m-3 w-[200px]'>
                    <Controller
                            name="exchangeDepartment"
                            control={control}
                            rules={{
                            required: "Campo requerido",
                            minLength : {
                                value : 4 ,
                                message : 'Al menos 4 numeros'
                            },
                            maxLength : {
                                value : 20,
                                message : 'Maximo 20 números'
                            },
                            }}
                            render={({ field }) => (
                            <Input
                                {...field}
                                type="text"
                                label="Departamento"
                                variant="bordered"
                                color={errors.exchangeDepartment? "danger" : ""}
                                errorMessage={errors.exchangeDepartment?.message}
                                className="max-w-xs"
                            />
                            )}
                        />
                    </div>

                    <div className=' flex-col m-3'>
                        <Controller
                            name="exchangeMunicipality"
                            control={control}
                            rules={{
                            required: "Campo requerido",
                            minLength : {
                                value : 4 ,
                                message : 'Al menos 4 letras'
                            },
                            maxLength : {
                                value : 12,
                                message : 'Maximo 20 letras'
                            }
                            }}
                            render={({ field }) => (
                            <Input
                                {...field}
                                type="text"
                                label="Municipio"
                                variant="bordered"
                                color={errors.exchangeMunicipality? "danger" : ""}
                                errorMessage={errors.exchangeMunicipality?.message}
                                className="max-w-xs"
                            />
                            )}
                        />
                        </div> 
                </div>

                <div className="flex ">
                    <div className=' flex-col m-3 w-[200px]'>
                    <Controller
                            name="exchangeCashPrice"
                            control={control}
                            rules={{
                            required: "Campo requerido",
                            minLength : {
                                value : 1 ,
                                message : 'Al menos 1 numero'
                            },
                            maxLength : {
                                value : 12,
                                message : 'Maximo 12 números'
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
                                label="Efectivo involucrado"
                                variant="bordered"
                                color={errors.exchangeCashPrice? "danger" : ""}
                                errorMessage={errors.exchangeCashPrice?.message}
                                className="max-w-xs"
                            />
                            )}
                        />
                    </div>
                    <div className=' flex-col m-3 w-[200px]'>
                        <Controller 
                            name='exchangeCashPriceStatus'
                            control={control}
                            rules={{
                                required : "Campo requerido"                                
                            }}
                            render={({field}) => (
                                <Select
                                {...field}
                                label="Tipo de efectivo"
                                variant="bordered"
                                color={errors.exchangeCashPriceStatus ? "danger" : ""}
                                errorMessage={errors.exchangeCashPriceStatus?.message}
                                className="max-w-xs"
                                onChange={(e) => {
                                  field.onChange(e);
                                }}
                                >
                                    <SelectItem  key="true" value="true">
                                        Entrante
                                    </SelectItem>
                                    <SelectItem  key="false" value="false">
                                        Saliente
                                    </SelectItem>
                                    <SelectItem  key="No aplica" value="false">
                                        No aplica
                                    </SelectItem>
                                </Select>
                            )}
                        />
                    </div>


                </div>
                <div className=' ml-3 mb-3'>
                        <Controller
                            name="exchangePecuniaryPenalty"
                            control={control}
                            rules={{
                            required: "Campo requerido",
                            }}
                            render={({ field }) => (
                            <Input
                                {...field}
                                type="number"
                                label="Sancion pecunaria"
                                variant="bordered"
                                color={errors.exchangePecuniaryPenalty? "danger" : ""}
                                errorMessage={errors.exchangePecuniaryPenalty?.message}
                                className="max-w-xs"
                            />
                            )}
                        />
                        </div> 
                <div className=' ml-3 mb-3'>
                        <Controller
                            name="exchangeLimitations"
                            control={control}
                            rules={{
                                required : 'Campo obligatorio'
                              }}
                            render={({ field }) => (
                            <Textarea
                            {...field}
                            type="text"
                            label="Limitaciones"
                             variant="bordered"
                            color={errors.exchangeLimitations ? "danger" : ""}
                            errorMessage={errors.exchangeLimitations?.message}
                            className="max-w-xs"
                        />
                    )}
                 /> 
            </div>

            <div className=' flex justify-around mb-7'>
                    <Button size='lg' color='primary' className=' hover:bg-blue-900' type='submit'>Registrar</Button>
                    <Button size='lg' color='danger' onClick={handleCancelExchange} className=' hover:bg-pink-900'>Cancelar</Button>
            </div>
        </form>
    </aside>
  )
}
