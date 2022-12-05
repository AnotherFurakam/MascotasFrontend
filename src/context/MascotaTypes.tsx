import { IMascota } from "../models/Mascota"

export interface IState {
  mascotas: IMascota[],
  selectedMascota: IMascota | null
}

export interface IAction {
  type: 
    'GET_MASCOTAS'
  | 'GET_MASCOTA_BY_ID'
  | 'POST_MASCOTA'
  | 'PUT_MASCOTA'
  | 'DELETE_MASCOTA'
  | 'SET_SELECTED_MASCOTA'
  | 'CLEAR_SELECTED_MASCOTA',
  payload?: any
}

export interface InitialState {
  mascotas: IMascota[],
  selectedMascota: IMascota | null
}

