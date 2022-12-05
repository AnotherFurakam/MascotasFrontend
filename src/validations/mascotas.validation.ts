import * as Yup from "yup";
import { IPostMascota, IPutMascota } from "../models/Mascota";

export const mascotaSchema: Yup.SchemaOf<IPostMascota> = Yup.object({
  name: Yup.string().required("Debe llenar el campo nombre"),
  especies: Yup.string().required("Debe llenar el campo especie"),
  age: Yup.string().matches("^[^0][0-9]{0,1}$" as any,"Debe ser una edad").required("Debe llenar el campo edad"),
  ownername: Yup.string().required("Debe llenar el campo nombre del dueño"),
  email: Yup.string().email().required("Debe llenar el campo email del dueño"),
  image: Yup.string().required()
})

export const mascotaUpdateSchema: Yup.SchemaOf<IPostMascota> = Yup.object({
  name: Yup.string().required("Debe llenar el campo nombre"),
  especies: Yup.string().required("Debe llenar el campo especie"),
  age: Yup.string().matches("^[^0][0-9]{0,1}$" as any,"Debe ser una edad").required("Debe llenar el campo edad"),
  ownername: Yup.string().required("Debe llenar el campo nombre del dueño"),
  email: Yup.string().email().required("Debe llenar el campo email del dueño"),
  image: Yup.string().notRequired()
})
