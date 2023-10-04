import React, { useEffect, useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import {Button} from "@nextui-org/react";

import {AiTwotoneEdit} from 'react-icons/Ai';
import { EditUserContent } from './EditUserContent';

export function EditUser() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {idUser} = useParams();

    console.log(idUser);

  return (
    <div className='flex'>
        <Button onPress={onOpen}className='absolute right-0 top-40 mx-6 my-20 bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white font-bold'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
                {(onclose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-3">Editar usuario</ModalHeader>
                            <EditUserContent/>  
                    </>
                )}
            </ModalContent>
        </Modal>
    </div>
  )
}
