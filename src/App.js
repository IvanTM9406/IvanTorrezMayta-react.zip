// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Componentes/NavBar/NavBar";
import Home from "./Componentes/Home/Home";
import Footer from "./Componentes/Footer/Footer";
import Escaners from "./Componentes/Escaners/Escaners";
import Portatil from "./Componentes/Portatiles/Portatiles";
import PCescritorio from "./Componentes/Pcescritorio/Pcescritorio";
import Impresoras from "./Componentes/Impresoras/Impresoras";
import Contactanos from "./Componentes/Contactanos/Contactanos";
import Comprar from "./Componentes/Escaners/Venta";
import Venta from "./Componentes/Escaners/Comprar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Escaners" element={<Escaners />} />
          <Route path="/Portatiles" element={<Portatil />} />
          <Route path="/Pcescritorio" element={<PCescritorio />} />
          <Route path="/Impresoras" element={<Impresoras />} />
          <Route path="/contactos" element={<Contactanos />} />
          <Route path="/venta" element={<Venta />} />
          <Route path="/comprar" element={<Comprar />} />
      
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
