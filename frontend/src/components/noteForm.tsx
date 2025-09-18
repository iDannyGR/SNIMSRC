import { Field, Label, Textarea } from "@headlessui/react";
import React from "react";
import { Input } from "./ui";
import  Dropdown  from "./ui/Dropdown/Dropdown";
import Calendar from "./ui/Calendar/Calendar";
import { Separator } from "./ui/Separator/Separator";

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
      <Field className="flex flex-col gap-1">
        <Label htmlFor="title">Nombre de actividad</Label>
        <Input
          name="title"
          className="border w-full rounded-md p-2"
          placeholder="Escribe el nombre de la actividad"
        ></Input>
      </Field>
      <Textarea
        name="objetivo"
        className="border min-w-full focus:border-blue-500 focus:ring-blue-500"
      ></Textarea>
      <Textarea name="objetivo" className="border  min-w-full"></Textarea>
    </div>
  );
}
