import React, {useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { usePurchases } from '../context/purchaseContext';
import { useClients } from '../../Clients/context/clientsContext';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import {AiOutlinePlusCircle} from 'react-icons/Ai';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { departamentos } from '../../../colombia.js';



export function PurchaseRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit, formState:{errors}, control} = useForm();
    const {createPurchase} = usePurchases();
    const {clients} = useClients();
    const {vehicles} = useVehicles();

    const onSubmit = (data, e) => {
        e.preventDefault();
        createPurchase(data);
    };

    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState('');

  return (
    <div className='flex'>
      <Button title='Agregar compra' endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>    
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos de la compra</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex'>
                        <div className='flex-col m-3 w-[200px]'>
                            <Controller
                              name='idClientPurchase'
                              control={control}
                              rules={{
                                required : 'Campo requerido'
                              }}
                              render={({field}) => (
                                <Select
                                  {...field}
                                  label="Documento del cliente"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.idClientPurchase ? "danger" : ""}
                                  errorMessage={errors.idClientPurchase?.message}
                                  className="max-w-xs"
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                  {clients.filter(client => client.clientStatus === "true").map((client, i) => (
                                    <SelectItem key={client.idClient} value={client.clientDocument}>
                                        {client.clientDocument}
                                    </SelectItem>
                                  ))}
                                  </Select>
                              )}
                            />
                        </div>

                        <div className='flex-col m-3 w-[200px]'>
                        <Controller
                              name='idVehiclePurchase'
                              control={control}
                              rules={{
                                required : 'Campo requerido'
                              }}
                              render={({field}) => (
                                <Select
                                  {...field}
                                  label="Placa del vehículo"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.idVehiclePurchase ? "danger" : ""}
                                  errorMessage={errors.idVehiclePurchase?.message}
                                  className="max-w-xs"
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                {vehicles.filter(vehicles => vehicles.vehicleStatus === "true").map((vehicles, i) => (
                                    <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
                                        {vehicles.licensePlate}
                                    </SelectItem>
                                  ))}
                                  </Select>
                              )}
                            />
                        </div>
                    </div>
                      

                    {departamentos && departamentos.length > 0 && (
                          <div className='flex'>
                            <div className='flex-col m-3 w-[200px]'>
                              <Controller
                                name="purchaseDepartment"
                                control={control}
                                rules={{ required: 'Campo requerido' }}
                                render={({ field }) => (
                                  <Select
                                    {...field}
                                    label="Departamento"
                                    variant="bordered"
                                    endContent={<RequiredIcon />}
                                    color={errors.purchaseDepartment ? "danger" : ""}
                                    errorMessage={errors.purchaseDepartment?.message}
                                    className="max-w-xs"
                                    onChange={(e) => {
                                      field.onChange(e.target.value);
                                      setDepartamentoSeleccionado(e.target.value);
                                    }}
                                  >
                                    {departamentos.map((departamento, i) => (
                                      <SelectItem key={i} value={departamento.departamento}>
                                        {departamento.departamento}
                                        </SelectItem>
                                    ))}
                                  </Select>
                                )}
                              />
                            </div>

                            <div className='flex-col m-3 w-[200px]'>
                                <Controller
                                  name="purchaseMunicipality"
                                  control={control}
                                  rules={{ required: 'Campo requerido' }}
                                  render={({ field }) => {
                                    const departamento = departamentos.find((d) => d.id === parseInt(departamentoSeleccionado, 10));
                                    console.log(departamento)
                                    const ciudades = departamento ? departamento.ciudades : [];
                                    return (
                                      <Select
                                        {...field}
                                        label="Ciudad o municipio"
                                        variant="bordered"
                                        endContent={<RequiredIcon />}
                                        color={errors.purchaseMunicipality ? "danger" : ""}
                                        errorMessage={errors.purchaseMunicipality?.message}
                                        className="max-w-xs"
                                        value={ciudades.length > 0 ? ciudades[0] : ''}
                                        onChange={(e) => {
                                          field.onChange(e.target.value);
                                        }}
                                      >
                                        {ciudades.map((ciudad, i) => (
                                          <SelectItem key={i} value={ciudad.valueOf}>
                                            {ciudad}
                                          </SelectItem>
                                        ))}
                                      </Select>
                                    );
                                  }}
                                />
                            </div>
                          </div>
                        )}

                        <div className=' flex-col m-3'>
                            <Controller
                              name="purchaseDate"
                              control={control}
                              rules={{
                                required : 'Campo requerido',
                                validate: value => {
                                  const currentDate = new Date();
                                  const selectedDate = new Date(value);
                                  if (selectedDate > currentDate) {
                                    return 'La fecha no puede ser mayor a la fecha actual';
                                  }
                                  const minDate = new Date().setDate(currentDate.getDate() - 15);
                                  if (selectedDate < minDate) {
                                    return 'La fecha no puede ser menor a 15 días antes de la fecha actual';
                                  }
                                  return true;
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="datetime-local"
                                  label="Fecha de compra"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.purchaseDate ? "danger" : ""}
                                  errorMessage={errors.purchaseDate?.message}
                                  className="max-w-xs"
                                />
                            )}
                          /> 
                        </div>

                        <div className=' flex-col m-3'>
                            <Controller
                              name="purchaseFinalPrice"
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
                                  label="Precio de compra"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.purchaseFinalPrice? "danger" : ""}
                                  errorMessage={errors.purchaseFinalPrice?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                        </div>  
                  

                    <div className=' m-3'>
                    <Controller
                          name="purchasePecuniaryPenalty"
                          control={control}
                          rules={{
                            required: "Campo requerido"
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="number"
                              label="Sanción pecuniaria"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.purchasePecuniaryPenalty ? "danger" : ""}
                              errorMessage={errors.purchasePecuniaryPenalty?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>

                    <div className=' m-3'>
                            <Controller
                              name="purchaseLimitations"
                              control={control}
                              rules={{
                                required: "Campo requerido",
                                minLength: {
                                  value: 3,
                                  message: "Al menos 3 caracteres"
                                },
                                maxLength: {
                                  value: 200,
                                  message: "Máximo 200 caracteres"
                                }
                              }}
                              render={({ field }) => (
                                <Textarea
                                  {...field}
                                  type="text"
                                  label="Limitaciones"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.purchaseLimitations ? "danger" : ""}
                                  errorMessage={errors.purchaseLimitations?.message}
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
