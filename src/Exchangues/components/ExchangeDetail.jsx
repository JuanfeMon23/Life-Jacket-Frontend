import React, { useEffect } from 'react'
import { useVehicles } from '../../Vehicles/context/vehiclesContext'
import { useExchange } from '../context/ExchangeContext';
import {useForm, Controller} from 'react-hook-form';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    Select,
    SelectItem
  } from "@nextui-org/react";

  const columns = [
    {name: "Placa", uid: "name", sortable: true},
    {name: "Marca", uid: "sortname", sortable: true},
    {name: "Modelo", uid: "role", sortable: true},
    {name: "Estado", uid: "status", sortable: true}
  ];


  function onSubmit(){

  }

export  function ExchangeDetail() {
    const {vehicles, getVehicles} = useVehicles();
    const { handleSubmit, formState:{errors}, control, reset} = useForm();

    useEffect(() => {
        getVehicles();
    } ,[])

    function onSubmit(event){

    };
  return (
    <> 
    <div className='  ml-5'>
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className=' flex justify-between'>
                <div className=' w-[400px]'>
                    <Controller
                        name='idVehicleExchange'
                        control={control}
                        rules={{
                            required : 'Campo obligatorio'
                        }}
                        render={({field}) => (
                    <Select
                        {...field}
                        label="Seleccionar vehículo"
                        variant="bordered"
                        color={errors.idVehicleExchange ? "danger" : ""}
                        errorMessage={errors.idVehicleExchange?.message}
                        className="max-w-xs"
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                    >
                    {vehicles.filter(vehicles => vehicles.vehicleStatus === "true").map((vehicles, i) => (
                        <SelectItem key={i} value={vehicles.licensePlate}>
                            {vehicles.licensePlate}
                        </SelectItem>
                        ))}
                    </Select>
                    )}
                    />
                </div>
                <div className=' w-[400px]'>
                    <Controller 
                            name='vehicleStatusExchange'
                            control={control}
                            rules={{
                                required : "Campo requerido"
                            }}
                            render={({field}) => (
                                <Select
                                {...field}
                                label="Estado del vehiculo"
                                variant="bordered"
                                color={errors.vehicleStatusExchange ? "danger" : ""}
                                errorMessage={errors.vehicleStatusExchange?.message}
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
                                </Select>
                            )}
                    />
                </div>
                <div>
                    <Button type='submit' size='lg' title='Agregar vehículo' className=' text-white bg-green-600 hover:bg-green-800'>Agregar</Button>
                </div>
            </div>
            </form>
    <div className=' w-[85rem] mt-7'>
    <Table
        aria-label="Exchange Table"
        isCompact
        color='primary'
        bottomContentPlacement="outside"
            >
                <TableHeader>
                        {columns.map((item) => (
                            <TableColumn key={item.uid}>
                                {item.name}
                            </TableColumn>
                        ))}
            </TableHeader>
                <TableBody >
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>

    </>
  )
}
