import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home.jsx";
import QuienesSomos from "./components/QuienesSomos.jsx";
import Contactos from "./components/Contactos.jsx";
import DesarrolloWeb from "./components/DesarrolloWeb.jsx";
import SocialMedia from "./components/SocialMedia.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index path="/" element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="contactenos" element={<Contactos />} />
          <Route path="desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="social-media" element={<SocialMedia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
