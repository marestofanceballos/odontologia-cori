import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

import Hero from "./components/Hero";
import Horarios from "./components/Horarios";
import Servicios from "./components/Servicios";
import Urgencias from "./components/Urgencias";
import Contacto from "./components/Contacto";

import Turnos from "./pages/Turnos";

function Home() {
  return (
    <>
      <Hero />
      <Horarios />
      <Servicios />
      <Urgencias />
      <Contacto />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <>
      {/* 🔥 IMPORTANTE: esto va arriba de todo */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turnos" element={<Turnos />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
