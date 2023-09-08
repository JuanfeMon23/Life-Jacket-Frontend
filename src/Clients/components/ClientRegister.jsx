import React, { useEffect } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm} from 'react-hook-form';
import { useClients } from '../context/clientsContext';
import { useParams, useNavigate } from 'react-router-dom';

export  function ClientRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {register , handleSubmit, setValue,  formState:{errors}} = useForm();
const navigate = useNavigate();
const params = useParams();
const {createClient , updateClient, getClient} = useClients();

const onSubmit = (data) => {
  try {
    if(params.idClient){
      updateClient(params.idClient, {...data});
    } else {
      createClient({...data});
     }
  } catch (error) {
    throw new Error;
  }
};

useEffect(() => {
  const loadClient = async () => {
    if(params.idClient) {
      const client = await getClient(params.idClient);
      setValue('clientDocument', client.clientDocument);
      setValue('clientExpeditionPlace', client.clientExpeditionPlace);
      setValue('clientName', client.clientName);
      setValue('clientLastName', client.clientLastName);
      setValue('clientAddress', client.clientAddress);
      setValue('clientPhoneNumber', client.clientPhoneNumber);
      setValue('clientOtherPhoneNumber', client.clientOtherPhoneNumber);
      setValue('clientOtherContact', client.clientOtherContact);
    }
    loadClient();
  };
},[])

  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 top-5 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del cliente</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex ">
                    <div className=' flex-col mx-3'>
                      <Input type="text" variant="underlined" isClearable label='Documento' id='clientDocument'
                      {...register("clientDocument" , {required : true})}/>
                      {errors.clientDocument && <p className=' text-red-600'>Campo requerido</p>}
                    </div>


                    <div className='flex-col mx-3'> 
                      <Input type="text" label="Lugar de expedicion" variant="underlined" id='clientExpeditionPlace'
                    {...register("clientExpeditionPlace" , {required : true})}/>
                    {errors.clientExpeditionPlace && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>

                    
                  </div>

                  <div className=" flex">
                    <div className=' flex-col mx-3'>
                        <Input type="text" label="Nombre"  variant="underlined" id="clientName"
                        {...register("clientName" , {required : true})}/>
                        {errors.clientName && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>

                    <div className='flex-col mx-3'>
                        <Input type="text" label="Apellidos" variant="underlined" id='clientLastName'
                        {...register("clientLastName" , {required : true})}/>
                        {errors.clientLastName && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>

                  </div>

                  <div className=" flex">
                    <div className='flex-col mx-3'>
                    <Input type="text" label="Dirección" variant="underlined" id='clientAddress'
                    {...register("clientAddress" , {required : true})}/>
                    {errors.clientAddress && <p className=' text-red-600'>Campo requerido</p>}
                    </div>


                    <div className='flex-col mx-3'> 
                      <Input type="text" label="Telefono" variant="underlined" id='clientPhoneNumber'
                    {...register("clientPhoneNumber" , {required : true})}/>
                    {errors.clientPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}
                    </div>
                  </div>

                  <div>

                      <Input type="text" label="Otro telefono" variant="underlined" id='clientOtherPhoneNumber'
                      {...register("clientOtherPhoneNumber" , {required : true})}/>
                      {errors.clientOtherPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}
        
                  </div>

                  <div>
                    <Input type="text" label="Otro contacto" variant="underlined" id='clientOtherContact'
                      {...register("clientOtherContact" , {required : true})}/>
                      {errors.clientOtherContact && <p className=' text-red-600'>Campo requerido</p>}
                  </div>


                  <div className=" flex">
                    
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
