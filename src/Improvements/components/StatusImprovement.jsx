import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {GrStatusGood} from 'react-icons/gr';
import {TiDeleteOutline} from 'react-icons/ti';
import {useImprovements} from '../context/improvementsContext';


export  function StatusImprovement(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {statusImprovement} = useImprovements();
    const improvement = props.improvement

    function onSubmit(){
        statusImprovement(improvement.idImprovements)
    };
    
  return (
    <div className='flex'>
    {improvement.improvementStatus === true ? <Button className=' bg-green-600 rounded-lg' onPress={onOpen}><GrStatusGood className='text-2xl'/></Button> : <Button className=' bg-slate-600 rounded-lg' onPress={onOpen}><TiDeleteOutline className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" items-center">¿Deseas cambiar el estado de la mejora?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <button className=' bg-green-600  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</button>
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
