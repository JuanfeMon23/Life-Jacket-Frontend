import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Input, Button } from "@nextui-org/react";
import { useForm, Controller } from 'react-hook-form';
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
        <Button title='Genrerar informe de venta' className=' bg-violet-600 text-white' startContent={<IoDocumentTextOutline/>} onPress={onOpen}>Informe</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader className="flex flex-col ">Informe de ventas</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex  m-1 justify-center items-center">
                            <div className='flex '>
                                <Controller
                                    name="firstParameter"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="date"
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
                                            type="date"
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
