import React, {useState, useEffect} from 'react'
import {Modal, ModalContent, ModalHeader, 
    ModalBody, useDisclosure, Button, Select, SelectItem, Input} from "@nextui-org/react";
import {AiOutlinePlusCircle} from '../../../../node_modules/react-icons/ai';
import { useForm , Controller } from 'react-hook-form';
import { useVehicles } from '../../context/vehiclesContext';
import { RequiredIcon } from '../../../components/globalComponents/RequiredIcon';
import { ButtonAccept } from '../../../components/ButtonAccept';


export  function LinesRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { handleSubmit, formState : {errors}, control, reset } = useForm();
    const {createLine} = useVehicles();

    const onSubmit = (data) => {
      { onSubmit ? createLine(data) && reset() : '' }
    }

    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [vehicleBrands, setVehicleBrands] = useState([]);
    const [vehicleLines, setVehicleLines] = useState([]);
    const [selectedVehicleType, setSelectedVehicleType] = useState('');
    const [selectedBrandName, setSelectedBrandName] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const typesResponse = await fetch(`${import.meta.env.VITE_BACKEND}/vehicle-types`);
        const typesData = await typesResponse.json();
        setVehicleTypes(typesData);
 
        if (selectedVehicleType) {
          const brandsResponse = await fetch(`${import.meta.env.VITE_BACKEND}/vehicles-brand?vehicleType=${selectedVehicleType}`);
          const brandsData = await brandsResponse.json();
          setVehicleBrands(brandsData);

          if (selectedBrandName) {
            const linesResponse = await fetch(`${import.meta.env.VITE_BACKEND}/vehicles-lines?vehicleType=${selectedVehicleType}&brandName=${selectedBrandName}`);
            const linesData = await linesResponse.json();
            setVehicleLines(linesData);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, [selectedVehicleType, selectedBrandName]);

  return (
    <div className=' flex'>
        <Button title='Agregar registro de línea' onPress={onOpen} variant='solid' color='primary' endContent={<AiOutlinePlusCircle className=' text-white text-2xl font-bold'/>}>Línea</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Crear registro de línea</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col m-3 justify-center items-center'>
                    <Controller
                                name="VehicleType"
                                control={control}
                                rules={{
                                  required : 'Campo requerido'
                                }}
                                render={({ field }) => (
                                  <Select {...field}
                                   onChange={(e) =>{
                                    field.onChange(e);
                                    setSelectedVehicleType(e.target.value);
                                   }}
                                   aria-labelledby="vehicleTypeLabelRegister"
                                   className="max-w-xs mb-2"
                                   endContent={<RequiredIcon/>}
                                   color={errors.VehicleType ? "danger" : ""}
                                   errorMessage={errors.VehicleType?.message}
                                   variant='bordered'
                                   label='Tipo de vehículo'
                                   >
                                    {vehicleTypes.map((type) => (
                                      <SelectItem key={type.VehicleType} value={type.VehicleType}>
                                        {type.VehicleType}
                                      </SelectItem>
                                    ))}
                                  </Select>
                        )}
                      />
                    </div>
                    <div className=' flex flex-col m-3 justify-center items-center'>
                    <Controller
                        name="NameBrand"
                        control={control}
                        rules={{
                          required : 'Campo requerido'
                        }}
                        render={({ field }) => (
                          <Select
                           {...field} 
                           onChange={(e) => {
                            field.onChange(e);
                            setSelectedBrandName(e.target.value)
                          }} 
                          aria-labelledby="NameBrand"
                          className="max-w-xs mb-2"
                          endContent={<RequiredIcon/>}
                          color={errors.NameBrand ? "danger" : ""}
                          errorMessage={errors.NameBrand?.message}
                          variant='bordered'
                          label='Marca'
                          >
                            {vehicleBrands.map((brand) => (
                              <SelectItem key={brand.NameBrand} value={brand.NameBrand}>
                                {brand.NameBrand}
                              </SelectItem>
                            ))}
                          </Select>
                        )}
                      />
                      </div>
                      <div className='flex flex-col m-3 justify-center items-center'>
                            <Controller
                                name="BrandLine"
                                control={control}
                                rules={{
                                  required: "Campo requerido",
                                  minLength: {
                                    value: 3,
                                    message: "Al menos 3 caracteres"
                                  },
                                  maxLength: {
                                    value: 20,
                                    message: "Máximo 20 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="text"
                                    label="Linea"
                                    variant="bordered"
                                    endContent={<RequiredIcon/>}
                                    color={errors.BrandLine ? "danger" : ""}
                                    errorMessage={errors.BrandLine?.message}
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
