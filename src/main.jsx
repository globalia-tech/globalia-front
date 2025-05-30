import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corregir importación
import Home from "./components/Home/Home.jsx";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos.jsx";
import Contactos from "./components/Contactos.jsx";
//import DesarrolloWeb from "./components/DesarrolloWeb.jsx";
import DesarrolloWeb from "./components/desarrolloweb/DesarrolloWeb.jsx";
import SocialMedia from "./components/SocialMedia.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          {/* Ruta padre debe envolver las rutas hijas */}
          <Route path="/" element={<App />}>
            <Route index element={<Home />} /> {/* Quitar path="/" */}
            <Route path="quienes-somos" element={<QuienesSomos />} />
            <Route path="contactenos" element={<Contactos />} />
            <Route path="desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="social-media" element={<SocialMedia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
);