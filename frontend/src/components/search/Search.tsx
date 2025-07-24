import { MagnifyingGlassPlusIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Search() {
  return (
    <div className="flex justify-end items-center relative ml-6">
      <MagnifyingGlassPlusIcon className="absolute w-6 h-6 mr-6 left-0 text-gray-400" />
      <input
        type="search"
        placeholder="Buscar actividad"
        name="search"
        id="search"
        className="w-96 h-12 rounded-md shadow-[0px_0px_2px_2px_rgba(0,_0,_0,_0.1)] focus:outline-0 pl-7"
      />
    </div>
  );
}
