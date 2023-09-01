import React from 'react'
import Data from '../../../vehicles.json'
import {Select, SelectItem} from "@nextui-org/react";


export  function SelectBrand() {
    const vehiclesType = Data.vehicleType;

  return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select label='Vehiculo'>
                {/* {Object.keys(Data['vehicleType']).map((type) => (
                    <optgroup label={type}> 
                        {Object.keys(Data['vehicleType']['type']).map((item) => (
                            <optgroup>
                                {item.line.map((line) => (
                                    <SelectItem value={line}>
                                            {line}
                                    </SelectItem>
                                ))}
                            </optgroup>
                        ))}
                    </optgroup>
                ))} */}
            </Select>
        </div>
  )
}
