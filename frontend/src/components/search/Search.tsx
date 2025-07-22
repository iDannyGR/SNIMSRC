import { MagnifyingGlassPlusIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Search() {
  return (
    <div className="relative flex justify-center items-center ml-6">
      <input
        type="search"
        placeholder="Buscar actividad"
        name="search"
        id="search"
        className="w-96 h12 rounded-md shadow-md"
      />
      <MagnifyingGlassPlusIcon className="w-6 h-6 right-0 text-gray-400" />
    </div>
  );
}
