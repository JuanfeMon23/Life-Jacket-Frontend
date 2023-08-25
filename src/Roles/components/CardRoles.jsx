import {Card, CardHeader, CardBody} from "@nextui-org/react";
import React from 'react';
import { useRoles } from "../context/rolesContext";

export function CardRoles() {
    const {roles} = useRoles();
  return (
    roles.map((roles) => (
        <div key={roles.id}>
        <Card className="h-12 w-21 my-2 mx-2 flex">
            <CardHeader>
                <p className="text-md font-bold ">{roles.rolName}</p>
            </CardHeader>
        </Card>
        </div>

    ))

  )
}
