import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";

export function WatchUser(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const user = props.user


  return (
    <>
      <Button onPress={onOpen}><FiEye className="text-white"/></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" bg-indigo-950 text-white text-center">Informacion del usuario</ModalHeader>
                <ModalBody key={user.id}>
                  <div className=" flex justify-around mx-2 my-2">
                    <div className=" w-100 border-2 border-indigo-500/75 rounded-lg p-1  ">
                      <p >{user.userName}</p>
                    </div>
                    
                    <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-auto">
                      <p>{user.userLastName}</p>
                    </div>
                    
                  </div>

                  <div className=" flex justify-center border-2 border-indigo-500/75 rounded-lg p-1 w-auto">
                    <p className="">{user.userEmail}</p>
                  </div>
                    
                  <div className="flex justify-around mx-2 my-2">
                    <p className="border-2 border-indigo-500/75 rounded-lg p-1">{user.userPhoneNumber}</p>
                    <p className="border-2 border-indigo-500/75 rounded-lg p-1">{user.userOtherPhoneNumber}</p>
                  </div>

                  <div className="flex justify-around mx-2 my-2">
                    <p className="border-2 border-indigo-500/75 rounded-lg p-1">{user.userAddress}</p>
                    <p className="border-2 border-indigo-500/75 rounded-lg p-1">{user.userRol}</p>
                  </div>


                </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
