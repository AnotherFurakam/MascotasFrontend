import { IPostMascota, ResponseApi } from "../models/Mascota";

const getALlMascotas = async () => {
  const response = await fetch('http://localhost:8080/api/GetAllMascotas');
  const data: ResponseApi = await response.json();
  return data
}

const getMascotasById = async (id: number) => {
  const response = await fetch('http://localhost:8080/api/GetMascotaById/'+id);
  const data: ResponseApi = await response.json();
  return data
}

const addMascota = async (mascota: IPostMascota, image: FileList | null) => {
  let form_data = new FormData();
  form_data.append("name", mascota.name)
  form_data.append("especies", mascota.especies)
  form_data.append("age", mascota.age)
  form_data.append("ownername", mascota.ownername)
  form_data.append("email", mascota.email)
  if (image) form_data.append("image", image[0])

  console.log("service: ",[...form_data])

  const response = await fetch('http://localhost:8080/api/AddMascota', {
    method: 'POST',
    body: form_data
  });
  const data: ResponseApi = await response.json()
  return data;
}

const updateMascota = async (id: number,mascota: IPostMascota, image: FileList | null) => {
  let form_data = new FormData();
  form_data.append("name", mascota.name)
  form_data.append("especies", mascota.especies)
  form_data.append("age", mascota.age)
  form_data.append("ownername", mascota.ownername)
  form_data.append("email", mascota.email)
  if (image) form_data.append("image", image[0])

  console.log("service: ",[...form_data])

  const response = await fetch('http://localhost:8080/api/UpdateMascotaById/'+id, {
    method: 'PUT',
    body: form_data
  });
  const data: ResponseApi = await response.json()
  return data;
}

const deleteMascotaById = async (id: number) => {
  const response = await fetch('http://localhost:8080/api/DeleteMascotaById/'+id, {
    method: 'DELETE',
  })
  const data: ResponseApi = await response.json()
  return data;
}

export default {
  getALlMascotas,
  getMascotasById,
  addMascota,
  updateMascota,
  deleteMascotaById
}