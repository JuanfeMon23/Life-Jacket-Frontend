import React from "react";
import {Input} from "@nextui-org/react";
import {FaSearch} from 'react-icons/fa';
import { useUsers } from "../../Users/Context/userContext";
import { useState } from "react";

export function Search(props) {
  const {users} = useUsers;


  return (
    <div className="w-[340px] h-[100px] px-5 rounded-2xl flex justify-center items-centertext-white">
      <Input
        onChange={(e) => setquery(e.target.value)}
        label={props.label}
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder={props.placeholder}
        startContent={
          <FaSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          
        }
      />
    </div>
  );
}