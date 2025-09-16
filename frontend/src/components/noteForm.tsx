import { Field, Label, Textarea } from "@headlessui/react";
import React from "react";
import { Input } from "./ui";

export default function NoteForm(): React.JSX.Element {
  return (
    <div className="flex flex-col max-w-full gap-4">
      <Field className="flex flex-col gap-4">
        <Label htmlFor="title">
          titulo de la actividad
        </Label>
        <Input
          name="title"
          className="border w-full rounded-md p-2"
          placeholder="Escribe el nombre de la actividad"
        ></Input>
      </Field>
      <Textarea name="objetivo" className="border min-w-full"></Textarea>
      <Textarea name="objetivo" className="border  min-w-full"></Textarea>
    </div>
  );
}
