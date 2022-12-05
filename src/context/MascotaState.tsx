import React, { ReactNode, useContext, useReducer } from "react";

//Context
import MascotaContext, { initialState } from "./MascotaContext";

//Reducer
import MascotaReducer from "./MascotaReducer";
import { IMascota, IPostMascota, ResponseApi } from "../models/Mascota";
import mascotaService from "../services/mascota.service";


interface Props {
  children: ReactNode
}


const MascotaState = ({ children }: Props) => {

  const [state, dispatch] = useReducer(MascotaReducer, initialState)

  const setSelectedMascota = async (id: number) => {
    const response: ResponseApi = await mascotaService.getMascotasById(id);
    dispatch({
      type: "SET_SELECTED_MASCOTA",
      payload: response.data
    })
  }

  const clearSelectedMascota = () => {
    dispatch({
      type: "CLEAR_SELECTED_MASCOTA",
      payload: null
    })
  }

  const getAllMascotas = async () => {
    const response: ResponseApi = await mascotaService.getALlMascotas();
    dispatch({
      type: 'GET_MASCOTAS',
      payload: response.data
    })
  }

  const postMascota = async (mascota: IPostMascota, imagen: FileList | null) => {
    const response: ResponseApi = await mascotaService.addMascota(mascota, imagen)
    dispatch({
      type: "POST_MASCOTA",
      payload: response.data
    })
  }

  const updateMascotaById = async (id: number, mascota: IPostMascota, imagen: FileList | null) => {
    console.log(id,mascota,imagen)
    const response: ResponseApi = await mascotaService.updateMascota(id, mascota, imagen);
    dispatch({
      type: "PUT_MASCOTA",
      payload: response.data
    })
  }

  const deleteMascotaById = async (id: number) => {
    const response: ResponseApi = await mascotaService.deleteMascotaById(id)
    dispatch({
      type: "DELETE_MASCOTA",
      payload: response.data
    })
  }


  return (
    <MascotaContext.Provider
      value={{
        state,
        dispatch,
        getAllMascotas,
        postMascota,
        deleteMascotaById,
        updateMascotaById,
        setSelectedMascota,
        clearSelectedMascota
      }}
    >
      {children}
    </MascotaContext.Provider>
  )
}
export default MascotaState