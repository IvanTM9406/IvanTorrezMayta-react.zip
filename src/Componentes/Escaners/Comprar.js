// src/Componentes/Escaners/Comprar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Comprar() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    producto: "",
    precio: "",
    fecha: "",
    hora: "",
    vendedor: "",
    observaciones: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAceptar = (e) => {
    e.preventDefault();
    // Validación opcional aquí
    navigate("/venta");
  };

  const handleCancelar = () => {
    setFormData({
      nombreCompleto: "",
      producto: "",
      precio: "",
      fecha: "",
      hora: "",
      vendedor: "",
      observaciones: "",
    });
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">DATOS DEL CLIENTE</h3>
      <form className="border p-4 rounded bg-light" onSubmit={handleAceptar}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="nombreCompleto"
            className="form-control"
            value={formData.nombreCompleto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Producto</label>
          <input
            type="text"
            name="producto"
            className="form-control"
            value={formData.producto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            name="precio"
            className="form-control"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hora</label>
          <input
            type="time"
            name="hora"
            className="form-control"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre del vendedor</label>
          <input
            type="text"
            name="vendedor"
            className="form-control"
            value={formData.vendedor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Observaciones</label>
          <input
            type="text"
            name="observaciones"
            className="form-control"
            value={formData.observaciones}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleCancelar}
          >
            Cancelar
          </button>

          <button type="submit" className="btn btn-danger">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Comprar;
