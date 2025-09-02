import React from "react";
import { Button, Input } from "@/components/ui";
import { ClipboardDocumentCheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function Search(): React.ReactElement {
  return (
    <div className="flex items-center justify-between w-[70%] h-20 p-4 mt-10 rounded-md shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)]">
      <Input 
        type="search"
        placeholder="Buscar..." 
        size="md" 
        className="w-96"
        leftIcon={<MagnifyingGlassIcon className="w-4 h-4"/>}
      />
      <Button variant="primary" size="md" leftIcon={<ClipboardDocumentCheckIcon className="w-4 h-4" />}>
        Añadir
      </Button>
    </div>
  );
}
