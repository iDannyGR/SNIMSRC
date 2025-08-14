import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import CalendarPicker from "./customCalendar";
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
import { useCreateNote } from "@/hooks/useNote";
import { Form } from "./ui/form";

interface ModalFormProps {
  children: React.ReactNode; // Acepta cualquier elemento React como children
}

export default function ModalForm({ children }: ModalFormProps) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue } = useCreateNote();
  console.log(values.date);
  return (
    <Dialog>
      <Form onSubmit={values}>
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Guardar Actividad</DialogTitle>
            <Separator className="my-4" />
            <DialogDescription>Recuerda se descriptivo en el detalle de la actividad</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-4 justify-center">
            <CalendarPicker value={values.date} label={"selecciona fecha"} onChange={(date)=>setFieldValue("date",date)} />
            <Separator orientation="vertical" />
            <CustomSelect />
          </div>
          <Separator className="my-4" />
          <Input
            id="object"
            type="text"
            placeholder="Objetivo de la actividad"
            value={values.object}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-8">
              <Textarea
                id="description"
                placeholder="describe la actividad"
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Textarea
                id="results"
                placeholder="Detalle los resultados"
                value={values.results}
                onBlur={handleBlur}
                onChange={handleChange}
              />
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
      </form>
      </Form>
    </Dialog>
  );
}
