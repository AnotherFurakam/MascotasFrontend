export interface IMascota {
  id: number,
  name: string,
  especies: string,
  age: string,
  urlImage: string,
  ownername: string,
  email: string
}

export interface IPostMascota  {
  name: string,
  especies: string,
  age: string,
  ownername: string,
  email: string,
  image?: string
}

export interface IPutMascota  {
  name: string,
  especies: string,
  age: string,
  ownername: string,
  email: string
}

export interface ResponseApi {
  data: IMascota,
  success: boolean,
  message: string
}