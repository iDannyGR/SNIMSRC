"use client";
import { Navbar, NavbarBrand, NavbarContent, Input, Button } from "@heroui/react";
import { SearchIcon } from "./SearchIcon";
import React from "react";

export default function Search(): React.JSX.Element {
  return (
    <Navbar className="w-[90%]  mt-10 rounded-md bg-white shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)]">
    
      <NavbarContent as="div" justify="center" className="border">
        <Input
          isClearable
          classNames={{
            label: "text-black/50 dark:text-white/50",
            innerWrapper: "bg-transparent",
            base: "max-w-full sm:max-w-[30rem]",
            mainWrapper: "h-full",
            input: "cursor-text!",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 shadow-sm"
          }}
          placeholder="buscar Actividad"
          size="sm"
          radius="md"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button color="danger" size="md">
          Nueva Actividad
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
