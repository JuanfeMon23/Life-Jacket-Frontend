import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useUsers } from "../Context/userContext";
import {FiEye}from "react-icons/fi";
export function WatchUser() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {getUser, users} = useUsers();

  useEffect(() => {
    getUser();
  },[]);

  return (
    <>
      <Button onPress={onOpen}><FiEye className="text-white"/></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" bg-indigo-950 text-white text-center">Informacion del usuario</ModalHeader>
              {users.map((users) => (
                <ModalBody key={users.id}>
                    <p>{users.userName}</p>
                </ModalBody>
                ))}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
