import React,{useState, useEffect} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, user} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { useUsers } from '../Context/userContext';
import {Select, SelectItem} from "@nextui-org/react";
import { useRoles } from '../../Roles/context/rolesContext';
import {AiOutlinePlusCircle} from 'react-icons/Ai';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { ButtonAccept } from '../../components/ButtonAccept';
import conection from '../../api/axios.js'

export  function UserRegister() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { handleSubmit, formState:{errors}, control, reset} = useForm();
  const {createUser} = useUsers();
  const {roles} = useRoles();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");



  const onSubmit = (data) => {
    { onSubmit ? createUser(data) && reset() : ''  }
  };

  const [departments, setDepartments] = useState([]);
  const [municipes, setMunicipes] = useState([]);
  const [selectedDepartment, setselectedDepartment] = useState('');
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const typesResponse = await fetch(`${import.meta.env.VITE_BACKEND}/Departments-departments`);
        const typesData = await typesResponse.json();
        setDepartments(typesData);


        if(selectedDepartment) {
          const municipesResponse = await fetch(`${import.meta.env.VITE_BACKEND}/Departments-municipes?department=${selectedDepartment}`);
          const municipesData = await municipesResponse.json();
          setMunicipes(municipesData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedDepartment]);

  return (
    <div className='flex'>
      <Button title='Agregar usuario' endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>
      <Modal isOpen={isOpen} scrollBehavior={scrollBehavior} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del usuario</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex ">
                      <div className=' flex-col m-3 w-[200px]'>
                        <Controller
                          name='userTypeDocument'
                          control={control}
                          rules={{
                            required : 'Campo requerido'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
                              label="Tipo de documento"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.userTypeDocument ? "danger" : ""}
                              errorMessage={errors.userTypeDocument?.message}
                              className="max-w-xs"
                              onChange={(e) => {
                                field.onChange(e);
                              }}
                            >
                              <SelectItem key='CC'>Cédula de ciudadanía</SelectItem>
                            </Select>
                          )}
                        />
                      </div>

                      <div className=' flex-col m-3'>
                      <Controller
                        name="userDocument"
                        control={control}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 numeros'
                          },
                          maxLength : {
                            value : 12,
                            message : 'Máximo 12 números'
                          },
                          pattern: {
                            value: /^[0-9]*$/, 
                            message: "Solo números"
                          }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Documento"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
                            color={errors.userDocument? "danger" : ""}
                            errorMessage={errors.userDocument?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                      </div>
                      
                  </div>

                  <div className=' flex'> 
                      <div className='flex-col m-3 w-[200px]'>
                      <Controller
                          name="userDepartment"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                setselectedDepartment(e.target.value);
                              }}
                              label="Departamento"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.userDepartment ? "danger" : ""}
                              errorMessage={errors.userDepartment?.message}
                              className="max-w-xs"
                            >
                              {departments.map((department) => (
                                <SelectItem key={department.Department} value={department.Department}>
                                  {department.Department}
                                </SelectItem>
                              ))

                              }

                            </Select>
                          )}
                        /> 
                      </div>

                      <div className='flex-col m-3 w-[200px]'>
                      <Controller
                          name="userMunicipality"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              label="Ciudad o municipio"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.userMunicipality ? "danger" : ""}
                              errorMessage={errors.userMunicipality?.message}
                              className="max-w-xs"
                            >
                              {municipes.map((municipe) => (
                                <SelectItem key={municipe.Municipe} value={municipe.Municipe}>
                                  {municipe.Municipe}
                                </SelectItem>
                              ))}
                            </Select>
                          )}
                        />
                      </div>
                  </div>


                    <div className="flex ">
                      <div className=' flex-col m-3'>
                      <Controller
                          name="userName"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Máximo 40 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Nombres"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.userName ? "danger" : ""}
                              errorMessage={errors.userName?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                      </div>

                      <div className=' flex-col m-3'>
                      <Controller
                          name="userLastName"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Máximo 40 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Apellidos"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.userLastName ? "danger" : ""}
                              errorMessage={errors.userLastName?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                      </div>
                    
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Controller
                        name="userEmail"
                        control={control}
                        rules={{
                          required: "Campo requerido",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Correo inválido"
                          }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="email"
                            label="Correo electrónico"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
                            color={errors.userEmail ? "danger" : ""}
                            errorMessage={errors.userEmail?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>


                    <div className='flex-col m-3'> 
                    <Controller
                      name="userPassword"
                      control={control}
                      rules={{
                        required: "Campo requerido",
                        minLength: {
                          value: 8,
                          message: "Al menos 8 caracteres"
                        },
                        pattern : {
                          value :  /^(?=.*[A-Z])(?=.*[\W])/,
                          message : 'Al menos una letra mayúscula y un caracter especial'
                        }
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="password"
                          label="Contraseña"
                          variant="bordered"
                          endContent={<RequiredIcon/>}
                          color={errors.userPassword ? "danger" : ""}
                          errorMessage={errors.userPassword?.message}
                          className="max-w-xs"
                        />
                      )}
                    />
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                        <Controller
                        name="userPhoneNumber"
                        control={control}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 números'
                          },
                          maxLength : {
                            value : 12,
                            message : 'Máximo 12 números'
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "Solo números"
                          }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Teléfono"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
                            color={errors.userPhoneNumber? "danger" : ""}
                            errorMessage={errors.userPhoneNumber?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>


                    <div className='flex-col m-3'> 
                    <Controller
                        name="userOtherPhoneNumber"
                        control={control}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 números'
                          },
                          maxLength : {
                            value : 12,
                            message : 'Máximo 12 números'
                          },
                          pattern: {
                            value: /^[0-9]*$/, // This pattern will only match numbers
                            message: "Solo números"
                          }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Otro teléfono"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
                            color={errors.userOtherPhoneNumber? "danger" : ""}
                            errorMessage={errors.userOtherPhoneNumber?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3 '>
                    <Controller
                          name="userAddress"
                          control={control}
                          rules={{
                            required: "Campo requerido"
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Dirreción"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.userAddress ? "danger" : ""}
                              errorMessage={errors.userAddress?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>     

                    <div className='flex-col m-3 w-[200px]'>
                    <Controller
                          name='idRolUser'
                          control={control}
                          rules={{
                            required : 'Campo obligatorio'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
                              label="Rol"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.idRolUser ? "danger" : ""}
                              errorMessage={errors.idRolUser?.message}
                              className="max-w-xs"
                              onChange={(e) => {
                                field.onChange(e);
                              }}
                            >
                            {roles.map((roles) => (
                              <SelectItem key={roles.idRol} value={roles.rolName}>
                                  {roles.rolName}
                              </SelectItem>
                          ))}
                            </Select>
                          )}
                        />
                  </div> 
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
