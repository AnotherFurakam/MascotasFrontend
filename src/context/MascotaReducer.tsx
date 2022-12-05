import { IAction, IState } from "./MascotaTypes";


export default function mascotaReducer (state:IState, action:IAction):IState{

  const {payload, type} = action

  switch (type) {
    case "GET_MASCOTAS":
      return {...state, mascotas: payload}

    case "POST_MASCOTA":
      return {...state, mascotas: [...state.mascotas,payload]} 
  
    case "DELETE_MASCOTA":
      const newArrayAdd = state.mascotas.filter(m => m.id !== payload.id)
      return {...state, mascotas: [...newArrayAdd]}
    
    case "PUT_MASCOTA":
      const newArrayUpdate = state.mascotas.map(m => m.id === payload.id ? payload : m) 
      return {...state, mascotas: [...newArrayUpdate]}

    case "SET_SELECTED_MASCOTA":
      return {...state, selectedMascota: {...payload}}

    case "CLEAR_SELECTED_MASCOTA":
      return {...state, selectedMascota: payload}

    default:
      return state
  }

}