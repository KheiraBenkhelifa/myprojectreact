import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MainPage from "./MainPage"
import Privacy from "./Pages/Legale/Privacy";
import Cookies from "./Pages/Legale/Cookies";
import LegalNotice from "./Pages/Legale/LegalNotice";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CookieBanner from "./Components/CookieBanner";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        {/* Página principale : One-page scroll */}
        <Route path="/" element={<MainPage />} />

        {/* Pàginas légales */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/LegalNotice" element={<LegalNotice />} />
        {/*Pàginas de formularios*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;


