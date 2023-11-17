import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {  Button, Textarea} from '@nextui-org/react';
import { useForm , Controller } from 'react-hook-form';
import { useImprovements } from '../context/improvementsContext.jsx';
import { toast } from "react-toastify";
import {Input} from "@nextui-org/react";
import {AiTwotoneEdit} from 'react-icons/Ai';
import { useVehicles } from '../../Vehicles/context/vehiclesContext.jsx';

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
        toast.error('No puedes editar mejoras inhabilitadas.' ,{
          autoClose : 1500,
          position: toast.POSITION.TOP_CENTER
      });
    }

  return (
    <div className='flex'>
        {improvement.improvementStatus === "true" ? <Button isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white font-bold mr-2'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
        : <Button  className=' mr-2' isIconOnly onClick={handleEdit}>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button> }
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-3">Editar mejora</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=' flex'>
                            <div className=' flex-col m-3'>
                            <Controller
                              name="improvementDate"
                              defaultValue={improvement.improvementDate}
                              control={control}
                              rules={{
                                required : 'Campo obligatorio'
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="date"
                                  label="Fecha de mejora"
                                  variant="bordered"
                                  color={errors.improvementDate ? "danger" : ""}
                                  errorMessage={errors.improvementDate?.message}
                                  className="max-w-xs"
                                />
                            )}
                          /> 
                            </div>

                            <div className=' flex-col m-3'>
                            <Controller
                              name="improvementPrice"
                              defaultValue={improvement.improvementPrice}
                              control={control}
                              rules={{
                                required: "Campo requerido",
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
                                  color={errors.improvementPrice? "danger" : ""}
                                  errorMessage={errors.improvementPrice?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                            </div>  

                        </div>

                        <div className='flex-col m-3 w-[400px]'>
                        <Controller
                          name="improvementDescription"
                          defaultValue={improvement.improvementDescription}
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Almenos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Maximo 40 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Textarea
                              {...field}
                              type="text"
                              label="Descripcion de la mejora"
                              variant="bordered"
                              color={errors.improvementDescription ? "danger" : ""}
                              errorMessage={errors.improvementDescription?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                        </div>

                    <div className=' text-center my-3 '>
                        <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold w-20 h-10 rounded-lg'>Crear</button>
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
