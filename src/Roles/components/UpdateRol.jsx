import React, {useState} from 'react'
import { useForm, Controller } from 'react-hook-form';
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Input, CheckboxGroup } from "@nextui-org/react";
import { useRoles } from '../context/rolesContext';
import {Button, Checkbox} from "@nextui-org/react";
import {AiOutlinePlusCircle} from '../../../node_modules/react-icons/ai';
import {AiTwotoneEdit} from '../../../node_modules/react-icons/ai';
import { toast } from "react-toastify";
import { ButtonAccept } from '../../components/ButtonAccept';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon';
import { updateRolRequest } from '../api/Roles';


export  function UpdateRol(props) {
    const {licenses, getRoles} = useRoles();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , setValue, handleSubmit, formState:{errors}, control, reset} = useForm({
    });
    const roles = props.roles;

    


    const onSubmit = async (data) => {
      try {
        const licenses = Object.keys(data).filter(key => key !== 'rolName' && data[key]);
        const updatedRol = {
            rolName: data.rolName,
            licenses
        };
        await updateRolRequest(roles.idRol, updatedRol);
        toast.success('Rol actualizado con éxito!',{
         position: toast.POSITION.TOP_CENTER,
         autoClose : 1500
        }); 
        console.log(data)
        getRoles()
        } catch (error) {
        toast.error(error.response.data.message ,{
         position: toast.POSITION.TOP_CENTER,
         autoClose : 1500
        });
        }
       }

    const handleException = () => {
        toast.error('No puedes editar un rol inactivo' ,{
            autoClose : 1500,
            position: toast.POSITION.TOP_CENTER
        });
    }

  return (
    <div className=' flex'>
      {roles.rolStatus === "true" ? <Button title="Editar rol" isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] hover:bg-[#A37D1A] rounded-lg text-white mr-2 font-bold '>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
       : <Button isIconOnly title="Editar rol" className=" mr-2" onClick={handleException}>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent>
          {(onclose) => (
              <>
            <ModalHeader className="flex flex-col gap-3">Editar rol</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex items-center justify-center'>
              <div className=' flex-col m-3 w-[200px]'>
                          <Controller
                              name="rolName"
                              control={control}
                              defaultValue={roles.rolName}
                              rules={{
                                required: "Campo requerido",
                                minLength: {
                                  value: 3,
                                  message: "Al menos 6 caracteres"
                                },
                                maxLength: {
                                  value: 40,
                                  message: "Máximo 40 caracteres"
                                },
                                pattern: {
                                  value: /^[a-zA-Z\s]*$/,
                                  message: "Solo letras"
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="text"
                                  label="Nombre"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.rolName ? "danger" : ""}
                                  errorMessage={errors.rolName?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                          </div>
                  <div className=' flex flex-col p-0 m-0'>
                  <CheckboxGroup
                    color='success'
                    defaultValue={[
                      roles.Licenses[0]?.idLicense ?? false,
                      roles.Licenses[1]?.idLicense ?? false,
                      roles.Licenses[2]?.idLicense ?? false,
                      roles.Licenses[3]?.idLicense ?? false,
                      roles.Licenses[4]?.idLicense ?? false,
                      roles.Licenses[5]?.idLicense ?? false,
                      roles.Licenses[6]?.idLicense ?? false,
                      roles.Licenses[7]?.idLicense ?? false,
                    ]}
                    >
                      <Controller
                        name="1"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <Checkbox {...field} value={1}>Usuarios</Checkbox>
                        )}
                      />
                      <Controller
                        name="2"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <Checkbox {...field} value={2}>Roles</Checkbox>
                        )}
                      />
                      <Controller
                        name="3"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <Checkbox {...field} value={3}>Vehiculos</Checkbox>
                        )}
                      />
                      <Controller
                        name="4"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <Checkbox {...field} value={4}>Compras</Checkbox>
                        )}
                      />
                      <Controller
                        name="5"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <Checkbox {...field} value={5}>Ventas</Checkbox>
                        )}
                      />
                      <Controller
                        name="6"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <Checkbox {...field} value={6}>Intercambios</Checkbox>
                        )}
                      />
                      <Controller
                        name="7"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <Checkbox {...field} value={7}>Clientes</Checkbox>
                        )}
                      />
                      <Controller
                        name="8"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <Checkbox {...field} value={8}>Mejoras</Checkbox>
                        )}
                      />
                    </CheckboxGroup>
                  </div>
                </div> 
                <div className='text-center my-3'>
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
