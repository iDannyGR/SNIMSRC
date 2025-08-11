import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import CalendarCustom from "./customCalendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { CustomSelect } from "./customSelect";
import React from "react";

interface ModalFormProps {
  children: React.ReactNode; // Acepta cualquier elemento React como children
}

export default function ModalForm({ children }: ModalFormProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Guardar Actividad</DialogTitle>
          <Separator className="my-4" />
          <DialogDescription>Recuerda se descriptivo en el detalle de la actividad</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-4 justify-center">
          <CalendarCustom />
          <Separator orientation="vertical" />
          <CustomSelect />
        </div>
        <Separator className="my-4" />
        <Input type="text" placeholder="Objetivo de la actividad" id="object" />
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-8">
            <Textarea placeholder="describe la actividad" />
            <Textarea placeholder="Detalle los resultados" />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
          <Button type="submit">Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
