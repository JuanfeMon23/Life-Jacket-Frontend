import React, { useEffect } from 'react'
import { useVehicles } from '../../Vehicles/context/vehiclesContext'
import { useExchange } from '../context/ExchangeContext';
import {useForm, Controller} from 'react-hook-form';
import {AiOutlineDelete} from 'react-icons/Ai';
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
    SelectItem,
    Chip
  } from "@nextui-org/react";

  const columns = [
    {name: "Placa", uid: "name", sortable: true},
    {name: "Marca", uid: "sortname", sortable: true},
    {name: "Modelo", uid: "role", sortable: true},
    {name: "Estado", uid: "status", sortable: true},
    {name: "Acciones", uid : "actionsDetail"}
  ];




export  function ExchangeDetail(props) {
    const {vehicles, getVehicles} = useVehicles();
    const {createExchangeDetail, exchanges, cancelExchangeDetail} = useExchange()
    const { handleSubmit, formState:{errors}, control, reset} = useForm();
    const idExchange = props.idExchange




    useEffect(() => {
        getVehicles();
    } ,[])


    const onSubmit = (data) => {
        console.log(data)
        createExchangeDetail(idExchange, data)
    };


  return (
    <> 
    <div className='  ml-5'>
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className=' flex flex-col sm:flex-row justify-between'>
                <div className=' w-[400px]'>
                    <Controller
                        name='idVehicleExchange'
                        control={control}
                        rules={{
                            required : 'Campo requerido'
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
                    {vehicles.filter(vehicles => vehicles.vehicleStatus === "true").map((vehicles) => (
                        <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
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
                                label="Estado del vehículo"
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
    <div className=' w-[22rem] md:w-[50rem] xl:w-[93rem] mt-7'>
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
                <TableBody emptyContent={'Aún no hay vehículos asociados al intercambio'} >
                {exchanges.filter(exchange => exchange.idExchange === idExchange).map((exchange) => (
                        exchange.vehiclesExchange.map((vehicle) => (
                        <TableRow key={vehicle.idVehicle}>
                            <TableCell>{vehicle.licensePlate}</TableCell>
                            <TableCell>{vehicle.brand}</TableCell>
                            <TableCell>{vehicle.model}</TableCell>
                            <TableCell>{vehicle.ExchangesDetails.vehicleStatusExchange === "true" ? <Chip color="success">Entrante</Chip>  : <Chip color="danger">Saliente</Chip>  }</TableCell>
                            <TableCell><Button onClick={() => {
                                cancelExchangeDetail(vehicle.ExchangesDetails.idExchangeDetail)
                            } } title='Eliminar vehículo del intercambio' isIconOnly className=' bg-red-400'><AiOutlineDelete className={`text-2xl text-white`}/></Button></TableCell>
                        </TableRow>
                        ))
                    ))}  
                </TableBody>
            </Table>
        </div>
    </div>
    

    </>
  )
}
