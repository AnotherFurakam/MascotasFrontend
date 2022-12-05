import { useContext, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

//Context
import MascotaContextProvider from "./context/MascotaContext";

//Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

//Pages
import { Home } from './pages/Home'
import { AdminMascota } from './pages/AdminMascota';

//Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Galeria } from "./pages/Galeria";


function App() {

  const { getAllMascotas } = useContext(MascotaContextProvider)

  useEffect(() => {
    getAllMascotas()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/gestion' element={
          <AdminMascota />
        } />
        <Route path='/galeria' element={
          <Galeria />
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
