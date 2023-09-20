import React, { useEffect , useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm} from 'react-hook-form';
import { useClients } from '../context/clientsContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Deparments } from '../../../departments';
import { Select, SelectItem } from '@nextui-org/react';

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


const [clientDepartment, setClientDepartment] = useState('');
const [clientMunicipality, setClientMunicipality] = useState(''); 

// useEffect(() => {
//   const loadClient = async () => {
//     if(params.idClient) {
//       const client = await getClient(params.idClient);
//       setValue('clientDocument', client.clientDocument);
//       setValue('clientExpeditionPlace', client.clientExpeditionPlace);
//       setValue('clientName', client.clientName);
//       setValue('clientLastName', client.clientLastName);
//       setValue('clientAddress', client.clientAddress);
//       setValue('clientPhoneNumber', client.clientPhoneNumber);
//       setValue('clientOtherPhoneNumber', client.clientOtherPhoneNumber);
//       setValue('clientOtherContact', client.clientOtherContact);
//     }
//     loadClient();
//   };
// },[])

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
                  <div className=' flex'>
                    <div className=' flex-col m-3 w-[200px]'>
                      <Select variant="underlined" label='Tipo de documento' id='clientTypeDocument' {...register("clientTypeDocument" , {required : true})} >
                            <SelectItem key='Cedula de ciudadania'>Cedula de ciudadanía</SelectItem>
                            <SelectItem key='Cedula de extranjería'>Cedula de extranjería</SelectItem>
                            <SelectItem key='Pasaporte'>Pasaporte</SelectItem>
                        </Select>
                          {errors.clientTypeDocument && <p className=' text-red-600'>Campo requerido</p>}

                    </div>
                    <div className=' flex-col m-3'>
                      <Input type="text" variant="underlined" isClearable label='Documento' id='clientDocument'
                      {...register("clientDocument" , {required : true})}/>
                      {errors.clientDocument && <p className=' text-red-600'>Campo requerido</p>}

                    </div>

                  </div>

                  <div className=' flex'> 
                      <div className='flex-col m-3 w-[200px]'>
                      <Input type="text" variant="underlined" isClearable label='Departamento' id='clientDepartment'
                      {...register("clientDepartment" , {required : true})}/>
                      {errors.clientDepartment && <p className=' text-red-600'>Campo requerido</p>} 
                          {/* <Select
                            {...register("clientDepartment" , {required : true})}
                            value={clientDepartment}
                            id='clientDepartment'
                            onChange={(e) => setClientDepartment(e.target.value)}
                            className='m-1'
                            variant='underlined'
                            label='Departamento'
                            >
                              {Deparments.map((index) => (
                                <SelectItem key={index.departamento} value={index.departamento}  >  
                                  {index.departamento}
                                </SelectItem>
                              ))}
                          </Select> */}
                      </div>

                      <div className='flex-col m-3 w-[200px]'>
                      <Input type="text" variant="underlined" isClearable label='Ciudad o municipio' id='clientMunicipality'
                      {...register("clientMunicipality" , {required : true})}/>
                         
                        {/* <Select
                            className='m-1'
                            label='Ciudad o municipio'
                            variant='underlined'
                            disabled={!clientDepartment}
                            id='clientMunicipality'
                            onChange={(e) => setClientMunicipality(e.target.value)}
                            value={clientMunicipality}
                            {...register("clientMunicipality" , {required : true})}
                            >
                            {clientDepartment &&
                                Deparments.find((department) => department.departamento === clientDepartment)
                                    .ciudades.map((ciudad) => (
                                        <SelectItem key={ciudad} value={ciudad}>
                                            {ciudad}
                                        </SelectItem>
                                ))}
                        </Select> */}
                        {errors.clientMunicipality && <p className=' text-red-600'>Campo requerido</p>} 
                      </div>
                  </div>



                  <div className=" flex">
                    <div className=' flex-col m-3'>
                        <Input type="text" label="Nombre"  isClearable variant="underlined" id="clientName"
                        {...register("clientName" , {required : true})}/>
                        {errors.clientName && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>

                    <div className='flex-col m-3'>
                        <Input type="text" label="Apellidos" isClearable variant="underlined" id='clientLastName'
                        {...register("clientLastName" , {required : true})}/>
                        {errors.clientLastName && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>

                  </div>

                  <div className=' m-3'>
                    <Input type="text" label="Dirección" isClearable variant="underlined" id='clientAddress'
                    {...register("clientAddress" , {required : true})}/>
                    {errors.clientAddress && <p className=' text-red-600'>Campo requerido</p>} 
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'> 
                        <Input type="text" label="Telefono" isClearable variant="underlined" id='clientPhoneNumber'
                      {...register("clientPhoneNumber" , {required : true})}/>
                      {errors.clientPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}
                    </div>

                    <div className=' flex-coo m-3'>
                      <Input type="text" label="Otro telefono" isClearable variant="underlined" id='clientOtherPhoneNumber'
                      {...register("clientOtherPhoneNumber" , {required : true})}/>
                      {errors.clientOtherPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}

                    </div>
                  </div>

                  <div className='m-3'>
                    <Input type="text" label="Otro contacto" isClearable variant="underlined" id='clientOtherContact'
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
