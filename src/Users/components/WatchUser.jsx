import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import { toast } from "react-toastify";


export function WatchUser(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const user = props.user

  function handleview (event){
    event.preventDefault();
    toast.error('No puedes ver un usuario inhabilitado' ,{
      autoClose : 1500,
      position: toast.POSITION.TOP_CENTER
  });
  };
 
  return (
    <>
    {user.userStatus === "true" ? <Button title="Ver usuario" isIconOnly className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0] mr-2' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
     : <Button isIconOnly title="Ver usuario" className=" mr-2" onClick={handleview}><FiEye className="text-white text-2xl"/></Button>}
      <Modal isOpen={isOpen} className=" mr-2" onOpenChange={onOpenChange} size="2xl" isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="  flex items-center ">Información del usuario</ModalHeader>
                <ModalBody key={user.id}>
                <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Tipo de documento</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
                          <p className=" text-center">{user.userTypeDocument}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="text-xs md:text-sm font-bold">Número de documento</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
                          <p className=" text-center">{user.userDocument}</p>
                      </div>
                    </div>
                  </div> 

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Departamento</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1 ">
                          <p className=" text-center">{user.userDepartment}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="text-xs md:text-sm font-bold">Ciudad o municipio</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
                          <p className=" text-center">{user.userMunicipality}</p>
                      </div>
                    </div>
                  </div>     

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Nombres</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1 ">
                          <p className=" text-center">{user.userName}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="text-xs md:text-sm font-bold">Apellidos</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
                          <p className=" text-center">{user.userLastName}</p>
                      </div>
                    </div>
                  </div>                  


                <div className=" flex m-5 ml-12">
                  <div className=" flex flex-col">
                    <p className="text-xs md:text-sm font-bold">Correo electrónico</p>
                    <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-[16rem] md:w-[20rem] md:w-[33rem] ">
                        <p className=" text-center">{user.userEmail}</p>
                    </div>
                  </div>
                </div>
                    
                <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Teléfono</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1 ">
                          <p className=" text-center">{user.userPhoneNumber}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="text-xs md:text-sm font-bold">Otro teléfono</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
                          <p className=" text-center">{user.userOtherPhoneNumber}</p>
                      </div>
                    </div>
                  </div>  

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Dirección</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1 ">
                          <p className=" text-center">{user.userAddress}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="text-xs md:text-sm font-bold">Rol</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
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
