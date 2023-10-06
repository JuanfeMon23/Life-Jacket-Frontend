import {Card, CardHeader, CardBody} from "@nextui-org/react";
import React from 'react';
import { useRoles } from "../context/rolesContext";

export function CardRoles() {
    const {roles} = useRoles();
  return (
    roles.map((roles) => (
        <div key={roles.idRol} >
          <div className="h-[7rem] w-[20rem] m-2 bg-gray-100 p-4 rounded-lg shadow-lg">
            <div className="flex ">
              <p className="text-lg font-semibold">{roles.rolName}</p>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                Ver
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                Actualizar
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                Estado
              </button>
            </div>
          </div>
        </div>

    ))
  )
}
