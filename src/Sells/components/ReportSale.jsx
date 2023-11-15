import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Input, Button } from "@nextui-org/react";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useSells } from '../context/sellsContext'; 
import { IoDocumentTextOutline } from "react-icons/io5";

export function ReportSale() {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();
   const { register, handleSubmit, formState: { errors }, control } = useForm();
   const { informSale } = useSells();

   const onSubmit = (data) => {
       informSale(data.firstParameter, data.secondParameter);
   };

   return (
    <>
        <Button className=' bg-violet-600 text-white' startContent={<IoDocumentTextOutline/>} onPress={onOpen}>Informe</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Informe de ventas</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex">
                            <div className='flex-col m-3'>
                                <Controller
                                    name="firstParameter"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="datetime-local"
                                            label="Primera fecha"
                                            variant="bordered"
                                            color={errors.firstParameter ? "danger" : ""}
                                            errorMessage={errors.firstParameter?.message}
                                            className="max-w-xs"
                                        />
                                    )}
                                />
                            </div>

                            <div className='flex-col m-3'>
                                <Controller
                                    name="secondParameter"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="datetime-local"
                                            label="Segunda fecha"
                                            variant="bordered"
                                            color={errors.secondParameter ? "danger" : ""}
                                            errorMessage={errors.secondParameter?.message}
                                            className="max-w-xs"
                                        />
                                    )}
                                />
                            </div>
                        </div>

                        <div className='text-center my-3'>
                            <ButtonAccept />
                        </div>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
);

}
