import { Description, Field, Label } from "@headlessui/react";
import React from "react";
import { Input } from "./ui";
import { Calendar, Separator, Dropdown, TextArea } from "./ui";
export default function NoteForm(): React.JSX.Element {
  return (
    <div className="flex flex-col max-w-full gap-4">
      <div className="flex items-center justify-around">
        <Field className="flex flex-col gap-2">
          <Label htmlFor="date">Fecha de la Actividad:</Label>
          <Calendar />
        </Field>
        <Separator orientation="vertical" className="h-10" />
        <Field className="flex flex-col gap-2">
          <Label htmlFor="type">Lugar</Label>
          <Dropdown />
        </Field>
      </div>
      <Separator />
      <Field className="flex flex-col gap-1">
        <Label htmlFor="title">Nombre de actividad</Label>
        <Input
          name="title"
          className="border w-full rounded-md p-2"
          placeholder="Escribe el nombre de la actividad"
        ></Input>
      </Field>
      <Field>
        <Label htmlFor="objetivo">Objetivo de la actividad:</Label>
        <TextArea name="objetivo"></TextArea>
      </Field>
      <Field>
        <Label htmlFor="resultado">Resultados:</Label>
        <Description className="text-sm/6 text-black/50">
          describe brevemente el resultado de las acciones
        </Description>
        <TextArea name="resultado"></TextArea>
      </Field>
    </div>
  );
}
