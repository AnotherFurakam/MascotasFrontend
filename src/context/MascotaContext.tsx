import { createContext } from "react";
import { IMascota, IPostMascota } from "../models/Mascota";
import { IAction, IState } from "./MascotaTypes";


interface MascotaContextValue {
  state: IState,
  dispatch: React.Dispatch<IAction>,
  getAllMascotas: () => Promise<void>, //en caso de función asíncrona
  postMascota: (mascota: IPostMascota, imagen: FileList | null) => Promise<void>,
  deleteMascotaById: (id: number) => Promise<void>,
  updateMascotaById: (id: number, mascota: IPostMascota, imagen: FileList | null) => Promise<void>,
  setSelectedMascota: (id: number) => Promise<void>,
  clearSelectedMascota: () => void
}


export const initialState = {
  mascotas: [] as IMascota[],
  selectedMascota: null
}


const mascotaContext = createContext<MascotaContextValue>({
  state: initialState,
  dispatch: () => { },
  getAllMascotas: async () => { },
  postMascota: async () => { },
  deleteMascotaById: async () => { },
  updateMascotaById: async () => { },
  setSelectedMascota: async () => { },
  clearSelectedMascota: () => {}
})

export default mascotaContext