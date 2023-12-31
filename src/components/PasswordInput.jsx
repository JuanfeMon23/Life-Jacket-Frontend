import React from "react";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./icons/EyeFilledIcon";
import {EyeSlashFilledIcon} from "./icons/EyeSlashFilledIcon";

export function PasswordInput() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      variant="underlined"
      placeholder="Contraseña"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
  );
}