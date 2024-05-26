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
          <Route path='/Decodevs/' element={<Index />} />
          <Route path='/Decodevs/Proyecto' element={<Proyecto />} />
          <Route path='/Decodevs/Somos' element={<Somos />} />
          <Route path='/Decodevs/Contacto' element={<Contacto />} />
          {/* <Route path='/ProyectoAker/productos' element={<Productos />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
