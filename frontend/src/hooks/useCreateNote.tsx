import { useFormik } from "formik";
import { toast } from "react-toastify";
import { noteSchema } from "@/schemas/note.schema";
// import { httpClient } from "@/lib/api/axios.config";

interface noteData {
  date: Date; // Cambiado a Date o string para manejar fechas,
  site: string;
  object: string;
  description: string;
  results: string;
}

const initialValues: noteData = {
  date: new Date(), // Inicializa con la fecha actual
  site: "",
  object: "",
  description: "",
  results: ""
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
