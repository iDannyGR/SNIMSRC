import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { noteSchema } from "@/schemas/note.schema";

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

const useSignin = () => {
  const router = useRouter();
  const [formData] = useState<noteData>(initialValues);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: noteSchema,
    validateOnBlur: true,
    validateOnChange: true,
    async onSubmit() {
      const res = await createNote( {
        redirect: false,
        
        callbackUrl: "/"
      });

      if (res?.status !== 401) {
        router.push("/perfil");
      } else toast.error("Usuario o contraseña invalido");
    }
  });

  return formik;
};

export { useSignin };
