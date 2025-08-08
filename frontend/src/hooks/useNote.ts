import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { noteSchema } from "@/schemas/note.schema";
import { httpClient } from "@/lib/api/axios.config";

interface noteData {
date: Date | string; // Cambiado a Date o string para manejar fechas,
site: String,
object:String,
description:String, 
results:String 
}

const initialValues: noteData = {
    date: "",
    site: "",
    object: "",
    description: "", 
    results: "" 
};

const useCreateNote = () => {
  const [formData] = useState<noteData>(initialValues);
  const router = useRouter();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: noteSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit:async (values:noteData) => {
      try {
       const response= await httpClient.post("/notes", values);
       toast.success("Nota creada correctamente"); 
       router.push("/");
       return response;
      } catch (error) {
        console.log("Error al crear la nota:", error);
        const errorMessage = error.response?.data?.message || "Error al crear la nota";
        toast.error(errorMessage);
      }
      }
      return formik;
    }
});

export { useSignin };
