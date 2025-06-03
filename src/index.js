// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// ✅ Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Bootstrap JS (para carrusel)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
