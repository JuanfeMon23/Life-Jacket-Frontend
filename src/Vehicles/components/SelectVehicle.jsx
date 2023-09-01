import React, { useEffect, useState } from 'react'
import Data from '../../../vehicles.json'
import {Select, SelectItem} from "@nextui-org/react";

export function SelectVehicle() {

  return (
    <div className='className="flex w-full flex-wrap md:flex-nowrap gap-4"'>
        {/* <Select label='Seleccione un tipo' variant='underlined'>
        {
            Data.map( ( data, index) => {
                return (
                        <SelectItem key={index} value={data.type}>
                            {data.type}
                        </SelectItem>
                )
            })
        },
        </Select> */}
    </div>

  )
}
