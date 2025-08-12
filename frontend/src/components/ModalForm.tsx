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
import { useCreateNote } from "@/hooks/useNote";

interface ModalFormProps {
  children: React.ReactNode; // Acepta cualquier elemento React como children
}

export default function ModalForm({ children }: ModalFormProps) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useCreateNote();
  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
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
          <Input
            type="text"
            placeholder="Objetivo de la actividad"
            value={values.object}
            id="object"
            onBlur={handleBlur}
          />
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-8">
              <Textarea
                placeholder="describe la actividad"
                value={values.description}
                onBlur={handleBlur}
              />
              <Textarea
                placeholder="Detalle los resultados"
                value={values.results}
                onBlur={handleBlur}
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
    </Dialog>
  );
}
