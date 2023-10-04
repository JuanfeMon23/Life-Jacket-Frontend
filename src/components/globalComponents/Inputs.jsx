import React from "react";
import {useForm, Controller} from 'react-hook-form';
import {Input} from "@nextui-org/react";

export function Inputs() {
  const [value, setValue] = React.useState(".");
  const { handleSubmit, control, formState: { errors } } = useForm();
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address"
          }
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="email"
            label="Email"
            variant="bordered"
            color={errors.email ? "danger" : ""}
            errorMessage={errors.email?.message}
            className="max-w-xs"
          />
        )}
      />

<Controller
  name="nombre"
  control={control}
  rules={{
    required: "El nombre es requerido",
    minLength: {
      value: 3,
      message: "El nombre debe tener al menos 3 caracteres"
    },
    maxLength: {
      value: 20,
      message: "El nombre debe tener menos de 20 caracteres"
    },
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: "El nombre solo puede contener letras"
    }
  }}
  render={({ field }) => (
    <Input
      {...field}
      type="text"
      label="Nombre"
      variant="bordered"
      color={errors.nombre ? "text-red-600" : ""}
      errorMessage={errors.nombre?.message}
      className="max-w-xs"
    />
  )}
/>
      <button type="submit">Submit</button>
    </form>
  );
}
