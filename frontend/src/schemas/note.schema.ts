import * as Yup from "yup";

export const noteSchema = Yup.object({
  date: Yup.date().required("La fecha es obligatoria"),
  site: Yup.string().required("el lugar es obligatorio"),
  object: Yup.string().required("El objetivo es obligatorio"),
  description: Yup.string().required("La descripción es obligatoria"),
  results: Yup.string().required("Los resultados son obligatorios")
});
