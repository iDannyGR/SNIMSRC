"use client";
import { NoteType } from "@/types/note.type";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { Button } from "../ui";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: NoteType;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, data, children }: ModalProps): React.ReactElement {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10 focus:outline-none">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <DialogPanel
          transition
          className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-outdata-closed:transform-[scale(95%)] data-closed:opacity-0"
        >
          <DialogTitle as="h3" className="text-base/7 font-medium text-white">
            {data ? "Editar Nota" : "Crear Nota"}
          </DialogTitle>
          <div>{children}</div>
          <div className="mt-4">
            <Button variant="danger" size="md" onClick={onClose}>
              Cerrar
            </Button>
            <Button variant="primary" size="md" onClick={() => console.log("guardar")}>
              Guarar
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
