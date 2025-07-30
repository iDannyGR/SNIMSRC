"use client";
import React from "react";
import Search from "./Search";
import { Button } from "../ui/button";
import ModalForm from "../ModalForm";

export default function MainBar() {
  return (
    <div className="w-[60%] h-20 mt-20 flex items-center justify-between rounded-md bg-white shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)]">
      <Search />
      <ModalForm>
      <Button
        className="p-6 mr-2 bg-blue-950 cursor-pointer"
        variant={"default"}
      >
        Añadir
      </Button>
      </ModalForm>
    </div>
  );
}
