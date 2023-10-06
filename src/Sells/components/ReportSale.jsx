import React,{useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { useSells } from '../context/sellsContext';
import { ButtonAccept } from '../../components/ButtonAccept';
import '../../../src/api/axios.js';

export  function ReportSale() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}, control} = useForm();
    const {informSale} = useSells();

    const [startDateSale, setStartDateSale] = useState('');
    const [finalDateSale, setFinalDateSale] = useState('');

    function onSubmit (firstParameter, secondParameter){
        informSale(firstParameter, secondParameter)
    };

    // const downloadReport = async (startDateSale, finalDateSale) => {
    //     try {
    //       const response = await axios.get(`/Sales/Report/${startDateSale}/${finalDateSale}`, {
    //         responseType: 'blob',
    //       });
      
    //       const url = window.URL.createObjectURL(new Blob([response.data]));
    //       const link = document.createElement('a');
    //       link.href = url;
    //       link.setAttribute('download', 'reporteVenta.pdf');
    //       document.body.appendChild(link);
    //       link.click();
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    //   const handleDownloadReport = () => {
    //     downloadReport(startDateSale, finalDateSale);
    //   };

  return (
    <>
      <Button onPress={onOpen}>Informe</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Informe de ventas</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex">
                    <div className=' flex-col m-3'>
                      <Controller
                            name="firstParameter"
                            control={control}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                label="Primera fecha"
                                variant="bordered"
                                color={errors.firstParameter ? "danger" : ""}
                                errorMessage={errors.firstParameter?.message}
                                className="max-w-xs"
                              />
                            )}
                          /> 
                    
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="secondParameter"
                          control={control}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Segunda fecha"
                              variant="bordered"
                              color={errors.secondParameter ? "danger" : ""}
                              errorMessage={errors.secondParameter?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 

                    </div>

                    <div className=' text-center my-3 '>
                        <ButtonAccept/>
                        {/* <button onClick={handleDownloadReport}>Descargar reporte</button> */}
                    </div>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
