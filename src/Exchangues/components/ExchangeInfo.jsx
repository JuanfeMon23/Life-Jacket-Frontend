import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import {Input, Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { useExchange } from '../context/ExchangeContext';
import { useClients } from '../../Clients/context/clientsContext';

export  function ExchangeInfo() {
    const { handleSubmit, formState:{errors}, control, reset} = useForm();
    const {updateExchange, cancelExchange} = useExchange();
    const {clients} = useClients();

    const onSubmit = () => {

    };

    const handleCancelExchange = () => {
        
    };

  return (
    <aside className=' border-2 border-blue-600/70 bg-white justify-end rounded-lg ml-5'>
        <h1 className=' text-3xl text-center font-bold m-5'>Datos del cambio</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex-col m-3 relative right-[86rem] '>
                <Controller
                              name='idClientPurchase'
                              control={control}
                              rules={{
                                required : 'Campo obligatorio'
                              }}
                              render={({field}) => (
                                <Select
                                  {...field}
                                  label="Documento del cliente"
                                  variant="bordered"
                                  color={errors.idClientPurchase ? "danger" : ""}
                                  errorMessage={errors.idClientPurchase?.message}
                                  className="max-w-xs"
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                  {clients.filter(client => client.clientStatus === "true").map((client, i) => (
                                    <SelectItem key={i} value={client.clientDocument}>
                                        {client.clientDocument}
                                    </SelectItem>
                                  ))}
                                  </Select>
                              )}
                            />
                </div>
                <div className=' flex'>
                        <Controller
                            name="exchangeDate"
                            control={control}
                            rules={{
                                required : 'Campo obligatorio'
                              }}
                            render={({ field }) => (
                            <Input
                            {...field}
                            type="datetime-local"
                            label="Fecha del cambio"
                             variant="bordered"
                            color={errors.exchangeDate ? "danger" : ""}
                            errorMessage={errors.exchangeDate?.message}
                            className="max-w-xs ml-10"
                        />
                    )}
                 /> 
            </div>
            <div className="flex ">
                    <div className=' flex-col m-3 w-[200px]'>
                    <Controller
                            name="exchangeDeparment"
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
                                color={errors.exchangeDeparment? "danger" : ""}
                                errorMessage={errors.exchangeDeparment?.message}
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
                                type="number"
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
                                value : 7 ,
                                message : 'Al menos 7 numeros'
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

                    <div className=' flex-col m-3'>
                        <Controller
                            name="exchangePecunaryPenalty"
                            control={control}
                            rules={{
                            required: "Campo requerido",
                            minLength : {
                                value : 7 ,
                                message : 'Al menos 7 numeros'
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
                                label="Sancion pecunaria"
                                variant="bordered"
                                color={errors.exchangePecunaryPenalty? "danger" : ""}
                                errorMessage={errors.exchangePecunaryPenalty?.message}
                                className="max-w-xs"
                            />
                            )}
                        />
                        </div> 
                </div>
                <div className=' flex'>
                        <Controller
                            name="exchangeLimitations"
                            control={control}
                            rules={{
                                required : 'Campo obligatorio'
                              }}
                            render={({ field }) => (
                            <Textarea
                            {...field}
                            type="datetime-local"
                            label="Limitaciones"
                             variant="bordered"
                            color={errors.exchangeLimitations ? "danger" : ""}
                            errorMessage={errors.exchangeLimitations?.message}
                            className="max-w-xs ml-10 mb-10"
                        />
                    )}
                 /> 
            </div>

            <div className=' flex justify-around mb-7'>
                    <Button size='lg' color='primary' type='submit'>Registrar</Button>
                    <Button size='lg' color='danger'>Cancelar</Button>
            </div>
        </form>
    </aside>
  )
}
