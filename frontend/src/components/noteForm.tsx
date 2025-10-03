import { Description, Field, Label } from "@headlessui/react";
import React from "react";
import { Input } from "./ui";
import { Calendar, Separator, Dropdown, TextArea, Button } from "./ui";
import { useCreateNote } from "@/hooks/useCreateNote";
export default function NoteForm(): React.JSX.Element {
  const { touched, errors, handleChange, handleSubmit, values, setFieldValue } = useCreateNote();
  console.log(JSON.stringify(values));
  return (
    <form className="flex flex-col max-wfull gap-4" onSubmit={handleSubmit}>
      <div className="flex items-center justify-around">
        <Field className="flex flex-col gap-2">
          <Label htmlFor="date">Fecha de la Actividad:</Label>
          <Calendar date={values.date} onChange={(d) => setFieldValue("date", d)} />
        </Field>
        <Separator orientation="vertical" className="h-10" />
        <Field className="flex flex-col gap-2">
          <Label htmlFor="type">Lugar</Label>
          <Dropdown value={values.site} onChange={(value) => setFieldValue("site", value)} />
        </Field>
      </div>
      <Separator />
      <Field className="flex flex-col gap-1">
        <Label htmlFor="title">Nombre de actividad</Label>
        <Input
          name="description"
          onChange={handleChange}
          value={values.description}
          state={touched.description && errors.description ? "error" : "default"}
          className="border w-full rounded-md p-2"
          placeholder="Escribe el nombre de la actividad"
        ></Input>
      </Field>
      <Field>
        <Label htmlFor="object">Objetivo de la actividad:</Label>
        <TextArea
          name="object"
          onChange={handleChange}
          value={values.object}
          invalid={touched.object && errors.object ? true : false}
        />
      </Field>
      <Field>
        <Label htmlFor="results">Resultados:</Label>
        <Description className="text-sm/6 text-black/50">
          describe brevemente el resultado de las acciones
        </Description>
        <TextArea
          name="results"
          onChange={handleChange}
          value={values.results}
          invalid={touched.results && errors.results ? true : false}
        ></TextArea>
      </Field>
      <Field>
        <Label htmlFor="comments">Observaciones:</Label>
        <Description className="text-sm/6 text-black/50">
          escribe las observaciones que consideres importantes OPCIONAL
        </Description>
        <TextArea
          name="comments"
          onChange={handleChange}
          value={values.comments}
          invalid={touched.comments && errors.comments ? true : false}
        ></TextArea>
      </Field>
    </form>
  );
}
