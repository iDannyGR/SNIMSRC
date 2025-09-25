import { useFormik } from "formik";
import { toast } from "react-toastify";
import { noteSchema } from "@/schemas/note.schema";

interface noteData {
  date: Date; // Cambiado a Date o string para manejar fechas,
  site: string;
  object: string;
  description: string;
  results: string;
  comments?: string;
}

const initialValues: noteData = {
  date: new Date(), // Inicializa con la fecha actual
  site: "",
  object: "",
  description: "",
  results: "",
  comments: ""
};

const useCreateNote = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: noteSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      toast.success("Note created successfully!");
      console.log("Submitting note:", values);
    }
  });
  return formik;
};
export { useCreateNote };
