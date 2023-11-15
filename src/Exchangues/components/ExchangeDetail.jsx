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

export  function ExchangeDetail() {
    const {vehicles} = useVehicles();
    const { handleSubmit, formState:{errors}, control, reset} = useForm();
  return (
    <> 
    <div className=' relative top-[20rem] ml-5'>
    <div className=' ml-4 w-[400px]'>
        <Controller
            name='idVehiclePurchase'
            control={control}
            rules={{
                required : 'Campo obligatorio'
            }}
            render={({field}) => (
         <Select
            {...field}
            label="Placa del vehículo"
                                  variant="bordered"
                                  color={errors.idVehiclePurchase ? "danger" : ""}
                                  errorMessage={errors.idVehiclePurchase?.message}
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
