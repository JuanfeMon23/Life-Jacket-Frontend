import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useUsers } from "../Context/userContext";
import {FiEye}from "react-icons/fi";

export function WatchUser(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  // const {getUser, users} = useUsers();
  const user = props.user
  const id = props.id
  // useEffect(() => {
  //   getUser();
  // },[]);

  return (
    <>
      <Button onPress={onOpen}><FiEye className="text-white"/></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" bg-indigo-950 text-white text-center">Informacion del usuario</ModalHeader>
                <ModalBody key={user.id}>
                    <p>{user.userName}</p>
                    <p>{user.id}</p>
                </ModalBody>
              {/* {users.map((users) => (
                ))} */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
