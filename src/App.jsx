import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Index } from "./Components/Index/index";
import { Proyecto } from "./Components/Proyectos/Proyecto";
import { Somos } from "./Components/Somos/Somos";
import { Contacto } from "./Components/Contacto/Contacto";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Proyecto' element={<Proyecto />} />
          <Route path='/Somos' element={<Somos />} />
          <Route path='/Contacto' element={<Contacto />} />
          {/* <Route path='/ProyectoAker/productos' element={<Productos />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
