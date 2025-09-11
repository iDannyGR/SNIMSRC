"use client";
import React from "react";
import { Button, Input } from "@/components/ui";
import { ClipboardDocumentCheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { modalStore } from "@/store/modalStore";
export default function Search(): React.ReactElement {
  const { openModal } = modalStore();
  return (
    <div className="flex items-center p-5 w-[70%] h-20 mt-10 rounded-md shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)]">
      <Input
        type="search"
        size="md"
        placeholder="Buscar..."
        leftIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
      />
      <Button
        variant="primary"
        size="md"
        onClick={openModal}
        leftIcon={<ClipboardDocumentCheckIcon className="w-4 h-4" />}
      >
        Añadir
      </Button>
    </div>
  );
}
