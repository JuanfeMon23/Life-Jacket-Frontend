import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Input, Button } from "@nextui-org/react";
import { useForm, Controller } from 'react-hook-form';
import { ButtonAccept } from '../../components/ButtonAccept';
import { usePurchases } from '../context/purchaseContext'; 
import { IoDocumentTextOutline } from "react-icons/io5";

export function ReportPurchase() {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();
   const { register, handleSubmit, formState: { errors }, control } = useForm();
   const { informPurchase } = usePurchases();

   const onSubmit = (data) => {
        informPurchase(data.firstParameter, data.secondParameter);
   };

   return (
    <>
        <Button title='Generar informe de compras' className=' bg-violet-600 text-white' startContent={<IoDocumentTextOutline/>} onPress={onOpen}>Informe</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader className="flex flex-col">Informe de compras</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex">
                            <div className='flex flex-col m-1 justify-center items-center'>
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

                            <div className='flex flex-col m-2 justify-center items-center'>
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
