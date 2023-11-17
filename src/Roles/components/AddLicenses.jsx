import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { useRoles } from '../context/rolesContext';
import {Button, Checkbox} from "@nextui-org/react";
import {AiOutlinePlusCircle} from 'react-icons/Ai';
import { toast } from "react-toastify";

export const AddLicenses = (props) => {
    const {licenses, addLicenses} = useRoles();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const roles = props.roles;

  const { handleSubmit, control } = useForm();

  const onSubmit = (selectedPermissions) => {
    try {
      for (const licenses of Object.keys(selectedPermissions)) {
        if (selectedPermissions[licenses]) {
           addLicenses(roles.idRol, licenses );
        }
      }
      toast.success('Permisos asignados con exito.' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });

    } catch (error) {
      console.error(error);
    }
  };

  function handleAddLicenses (e) {
    e.preventDefault();
    toast.error('Permisos ya asignados.' ,{
      autoClose : 1500,
      position: toast.POSITION.TOP_CENTER
  });

  }

  return (
    <div className=' flex'>
      { roles.Licenses <= 0 ? <Button isIconOnly endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold mr-2'/>
   :  <Button isIconOnly  onClick={handleAddLicenses} endContent={<AiOutlinePlusCircle className=' text-2xl'/>} variant="solid"  className=' text-white font-bold mr-2'/>  }
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
            {(onclose) => (
                <>
                <ModalHeader className="flex flex-col gap-3">Asignar permisos</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=' flex flex-col'>
                  {licenses.map((licenses) => (
                            <label key={licenses.idLicense}>
                            <Controller
                                name={String(licenses.idLicense)}
                                control={control}
                                defaultValue={false}
                                render={({ field }) => (
                                <Checkbox
                                  color='success'
                                    {...field}
                                />
                                )}
                            />
                            {licenses.licenseName}
                            </label>
                        ))}
                  </div>

                        <Button className=' mt-3' color='primary' type='submit'>Asignar Permisos</Button>
                    </form>
              </ModalBody>
                </>
            )}
        </ModalContent>
        </Modal>
    </div>
  );
};
