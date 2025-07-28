"use client";
import React from "react";
import GenericButton from "../Button";
import Search from "./Search";

export default function MainBar() {
  return (
    <div className="w-[60%] h-20 mt-20 flex items-center justify-between rounded-md bg-white shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)]">
      <Search />
      <GenericButton
        label={"Nueva Actividad"}
        className="flex items-center justify-center mr-2 bg-blue-950 text-white p-3 cursor-pointer hover:bg-black"
        type="button"
        onClick={() => console.log("add me product")}
      />
    </div>
  );
}
