import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import { toast } from "react-toastify";


export function WatchUser(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const user = props.user

  function handleview (event){
    event.preventDefault();
    toast.error('No puedes ver un usuario inhabilitado.' ,{
      autoClose : 1500,
      position: toast.POSITION.TOP_CENTER
  });
  };
 
  return (
    <>
    {user.userStatus === true ? <Button isIconOnly className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0]' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
     : <Button isIconOnly onClick={handleview}><FiEye className="text-white text-2xl"/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="  justify-center font-bold text-2xl ">Informacion del usuario</ModalHeader>
                <ModalBody key={user.id}>
                <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Tipo de documento</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{user.userTypeDocument}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Numero de documento</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{user.userDocument}</p>
                      </div>
                    </div>
                  </div> 

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Departamento del documento</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{user.userDepartment}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Ciudad o municipio</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{user.userMunicipality}</p>
                      </div>
                    </div>
                  </div>     

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Nombres</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{user.userName}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Apellidos</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{user.userLastName}</p>
                      </div>
                    </div>
                  </div>                  


                <div className=" flex justify-center m-3 ">
                  <div className=" flex flex-col">
                    <p className="font-bold">Correo Electronico</p>
                    <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-[20rem]">
                        <p className=" text-center">{user.userEmail}</p>
                    </div>
                  </div>
                </div>
                    
                <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Telefono</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{user.userPhoneNumber}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Otro Telefono</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{user.userOtherPhoneNumber}</p>
                      </div>
                    </div>
                  </div>  

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Dirección</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{user.userAddress}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Rol</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{user.Role.rolName}</p>
                      </div>
                    </div>
                  </div>  
                </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
