import react from "react";
import { useContext } from "react";
import { useUsers } from "../Context/userContext";

export function UserCard({user}) {
  return (
    <div className=" bg-orange-600 h-20 w-34">
        <h1 className=" text-green-700">{user.Nombre}</h1>
        <h1 className=" text-green-700">{user.Apellidos}</h1>
        <h1 className=" text-green-700">{user.Email}</h1>
    </div>
  )
}
