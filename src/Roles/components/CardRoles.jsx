import {Card, CardHeader, CardBody} from "@nextui-org/react";
import React from 'react';
import { useRoles } from "../context/rolesContext";

export function CardRoles() {
    const {roles} = useRoles();
  return (
    roles.map((roles) => (
        <div key={roles.idRol} >
          <div className="h-[7rem] w-[20rem] my-2 mx-2 flex flex-row border-3 border-[#252525] rounded-lg bg-white">
              <div className="">
                <div className=" flex">
                  <p className="text-md font-bold">{roles.rolName}</p>
                </div> 
                  <div className=" flex justify-center">
                      <button>ver</button>
                      <button>actualizar</button>
                      <button>estado</button>
                  </div>
              </div>
          </div>
        </div>

    ))
  )
}
