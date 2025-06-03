import React from "react";
import { Link } from "react-router-dom";
import "./Escaners.css";

export default function Escaners() {
  return (
    <div className="fondoEscaners py-4">
      <div className="container text-center">
        <h2 className="mb-4 text-white">Escáners Disponibles</h2>
        <div
          id="escanerCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Imagen 1 */}
            <div className="carousel-item active">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7260-2.jpg"
                className="d-block w-50 mx-auto"
                alt="src\Componentes\Home\Imagenes\sca.jpeg.jpg"
              />
              <div className="mt-3">
                <Link to="/venta" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>

            {/* Imagen 2 */}
            <div className="carousel-item">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7280-2.jpg"
                className="d-block w-50 mx-auto"
                alt="src\Componentes\Home\Imagenes\sca2.jpg.jpg"
              />
              <div className="mt-3">
                <Link to="/venta" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>

            {/* Imagen 3 */}
            <div className="carousel-item">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg"
                className="d-block w-50 mx-auto"
                alt="Escáner 3"
              />
              <div className="mt-3">
                <Link to="/venta" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>

            {/* Imagen 4 */}
            <div className="carousel-item">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg"
                className="d-block w-50 mx-auto"
                alt="Escáner 4"
              />
              <div className="mt-3">
                <Link to="/venta" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>

            {/* Imagen 5 */}
            <div className="carousel-item">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg"
                className="d-block w-50 mx-auto"
                alt="Escáner 5"
              />
              <div className="mt-3">
                <Link to="/venta" className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>

          {/* Controles de navegación */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#escanerCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#escanerCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        {/* Botón para volver */}
        <Link to="/" className="btn btn-warning mt-4">
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}
