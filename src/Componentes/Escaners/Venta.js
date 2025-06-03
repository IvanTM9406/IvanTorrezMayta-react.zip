// src/Componentes/Escaners/Venta.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Venta() {
  return (
    <div className="text-center">
      <div className="bg-light py-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/SoftTech_logo.svg/512px-SoftTech_logo.svg.png"
          alt="SoftTech Logo"
          style={{ width: "150px" }}
        />
      </div>
      <h3 className="mt-4 text-success">VENTA REALIZADA CON ÉXITO</h3>
      <Link to="/" className="d-block mt-2 text-primary fw-bold">
        Volver a la página principal
      </Link>
      <div className="bg-primary text-white mt-5 py-4">
        <h5 className="mb-3">NUESTRAS OFICINAS</h5>
        <p>📍 Av. Arce - SoftTech s.r.l. - Subsuelo 7887</p>
        <p>🏢 Cotacota - Oficina 767</p>
        <p>📍 Los pinos - Oficina 345</p>
        <h6 className="mt-4">MÉTODOS DE PAGO</h6>
      </div>
    </div>
  );
}

export default Venta;
