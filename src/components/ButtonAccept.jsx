import React from "react";
import {Button} from "@nextui-org/react";

export function ButtonAccept() {
  return (
      <Button title='Confirmar acción' type="submit"
      className="bg-gradient-to-r from-cyan-500 to-blue-800 text-white my-2 mx-3">
        Confirmar
    </Button>
    
  );
}
