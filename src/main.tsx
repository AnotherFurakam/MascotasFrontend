import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

//Context State
import MascotaContextState from "./context/MascotaState";

import './assets/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <MascotaContextState>
      <App />
    </MascotaContextState>
    </BrowserRouter>
  </React.StrictMode>
)
