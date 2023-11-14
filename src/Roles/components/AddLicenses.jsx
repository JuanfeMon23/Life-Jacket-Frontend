import React from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { useRoles } from '../context/rolesContext';
import {Button, Checkbox} from "@nextui-org/react";

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
      console.log('Permisos asignados con éxito');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=' flex'>
        <Button onPress={onOpen}> agregar permisos</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
            {(onclose) => (
                <>
                <ModalHeader className="flex flex-col gap-3">Asignar permisos</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                        {licenses.map((licenses) => (
                            <label key={licenses.idLicense}>
                            <Controller
                                name={String(licenses.idLicense)}
                                control={control}
                                defaultValue={false}
                                render={({ field }) => (
                                <Checkbox
                                    {...field}
                                />
                                )}
                            />
                            {licenses.licenseName}
                            </label>
                        ))}
                        <Button type='submit'>Asignar Permisos</Button>
                    </form>
              </ModalBody>
                </>
            )}
        </ModalContent>
        </Modal>
    </div>
  );
};
