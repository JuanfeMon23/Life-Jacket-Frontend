import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {  Button, Textarea} from '@nextui-org/react';
import { useForm , Controller } from 'react-hook-form';
import { useImprovements } from '../context/improvementsContext.jsx';
import { toast } from "react-toastify";
import {Input} from "@nextui-org/react";
import {AiTwotoneEdit} from 'react-icons/Ai';
import { useVehicles } from '../../Vehicles/context/vehiclesContext.jsx';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { ButtonAccept } from '../../components/ButtonAccept';

export  function EditImprovements(props) {
    const {vehicles} = useVehicles();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}, control} = useForm();
    const {editImprovement} = useImprovements();
    const improvement = props.improvement;


    const onSubmit = (data) =>  {
        editImprovement(improvement.idImprovements, data)
    }

    function handleEdit(event){
        event.preventDefault();
        toast.error('No puedes editar mejoras inhabilitadas' ,{
          autoClose : 1500,
          position: toast.POSITION.TOP_CENTER
      });
    }

  return (
    <div className='flex'>
        {improvement.improvementStatus === "true" ? <Button title='Editar mejora' isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white font-bold mr-2'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
        : <Button  title='Editar mejora' className=' mr-2' isIconOnly onClick={handleEdit}>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button> }
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-3">Editar mejora</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col m-3 justify-center items-center'>
                            <Controller
                              name="improvementDate"
                              defaultValue={improvement.improvementDate}
                              control={control}
                              rules={{
                                required : 'Campo requerido',
                                validate: value => {
                                  const currentDate = new Date();
                                  const selectedDate = new Date(value);
                                  if (selectedDate > currentDate) {
                                    return 'La fecha no puede ser mayor a la fecha actual';
                                  }
                                  const minDate = new Date().setDate(currentDate.getDate() - 20);
                                  if (selectedDate < minDate) {
                                    return 'La fecha no puede ser menor a 20 días antes de la fecha actual';
                                  }
                                  return true;
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="date"
                                  label="Fecha de mejora"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.improvementDate ? "danger" : ""}
                                  errorMessage={errors.improvementDate?.message}
                                  className="max-w-xs"
                                />
                            )}
                          /> 
                          </div> 

                            <div className='flex flex-col m-3 justify-center items-center'>
                            <Controller
                              name="improvementPrice"
                              defaultValue={improvement.improvementPrice}
                              control={control}
                              rules={{
                                required: "Campo requerido",
                                minLength : {
                                  value : 3,
                                  message : 'Al menos 3 números'
                                },
                                pattern: {
                                  value: /^[0-9]*$/, 
                                  message: "Solo números"
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="number"
                                  label="Precio de mejora"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.improvementPrice? "danger" : ""}
                                  errorMessage={errors.improvementPrice?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                            </div>  


                        <div className='flex flex-col m-3 justify-center items-center'>
                        <Controller
                          name="improvementDescription"
                          defaultValue={improvement.improvementDescription}
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Máximo 40 caracteres"
                            },
                            pattern: {
                              value: /^(?!.* {3})[^\s]+(?:\s[^\s]+)*$/,
                              message: "No más de dos espacios consecutivos"
                            }
                          }}
                          render={({ field }) => (
                            <Textarea
                              {...field}
                              type="text"
                              label="Descripción de la mejora"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.improvementDescription ? "danger" : ""}
                              errorMessage={errors.improvementDescription?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                        </div>

                      <div className=' text-center my-3 '>
                      <ButtonAccept/>
                      </div>
                    
                    </form>
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
        </div>
    )
}
