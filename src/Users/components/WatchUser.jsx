import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";

export function WatchUser(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const user = props.user


  return (
    <>
      <Button  className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0] ' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" bg-gradient-to-r from-[#252525] to-[#231949] text-white text-center">Informacion del usuario</ModalHeader>
                <ModalBody key={user.id}>
                  
                    <div className=" border-2 border-indigo-500/75 rounded-lg p-1 w-1/3 ">
                      <p className=" text-center">{user.userName}</p>
                    </div>
                    
                    <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-auto">
                      <p>{user.userLastName}</p>
                    </div>                   

                  <div className=" flex justify-center border-2 border-indigo-500/75 rounded-lg p-1 w-auto">
                    <p className="">{user.userEmail}</p>
                  </div>
                    
                  <div className="flex justify-around mx-2 my-2 ">
                  <div className="border-2 border-indigo-500/75 rounded-lg">
                    <p>{user.userPhoneNumber}</p>
                  </div>
                    
                    <p className=" p-2">{user.userOtherPhoneNumber}</p>
                  </div>



                </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
