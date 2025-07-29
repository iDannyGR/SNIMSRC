"use client";
import React from "react";
import GenericButton from "../Button";
import Search from "./Search";
import { Button } from "../ui/button";

export default function MainBar() {
  return (
    <div className="w-[60%] h-20 mt-20 flex items-center justify-between rounded-md bg-white shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)]">
      <Search />
        <Button
        className="p-6 bg-blue-950 text-white mr-2"
        variant={"outline"}
        onClick={() => console.log("añadido")}
      >
        Añadir
      </Button>
    </div>
  );
}
