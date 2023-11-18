import React from 'react'
import { useVehicles } from '../../Vehicles/context/vehiclesContext'
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
    const {vehicles} = useVehicles();
    console.log(vehicles)
    const { handleSubmit, formState:{errors}, control, reset} = useForm();
  return (
    <> 
    <div className='  ml-5'>
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className=' flex justify-between'>
                <div className=' w-[400px]'>
                    <Controller
                        name='idExchangeVehicle'
                        control={control}
                        rules={{
                            required : 'Campo obligatorio'
                        }}
                        render={({field}) => (
                    <Select
                        {...field}
                        label="Seleccionar vehículo"
                        variant="bordered"
                        color={errors.idExchangeVehicle ? "danger" : ""}
                        errorMessage={errors.idExchangeVehicle?.message}
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
                <div>
                    <Button type='submit' size='lg'  className=' text-white bg-green-600 hover:bg-green-800'>Agregar</Button>
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
