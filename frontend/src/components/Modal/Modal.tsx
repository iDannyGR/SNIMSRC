"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { Button } from "../ui";
import { Separator } from "../ui";
import { ModalProps } from "./Modal.types";

export default function Modal({
  isOpen,
  onClose,
  description,
  data,
  children
}: ModalProps): React.ReactElement {
  return (
    <Dialog
      open={isOpen}
      as="div"
      onClose={onClose}
      className="relative z-10 focus:outline-none rounded-4xl"
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/20 backdrop-blur-xs">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-outdata-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle as="div" className="text-base/7 font-bold text-black">
              {data ? "Modificar Actividad" : "Crear Actividad"}
            </DialogTitle>
            <Separator />
            <h3 className="text-gray-400 font-semibold text-sm text-center mb-3">{description}</h3>
            <div>{children}</div>
            <div className="flex justify-end mt-4">
              <Button type="submit" variant="primary" size="md">
                Guardar
              </Button>
              <Button variant="outline-secondary" size="md" onClick={onClose}>
                Cerrar
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
