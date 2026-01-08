import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold italic font-serif">
            Code<span className="text-pink-700">Way</span> Academy
          </h2>
          <p className="text-gray-400 mt-2">
            A tua jornada de aprendizagem começa aqui.
          </p>
        </div>

        {/* Links rápidas */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Links rapidas</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#home" className="hover:text-pink-600 transition">Home</a></li>
            <li><a href="/#metodologia" className="hover:text-pink-600 transition">Metodologia</a></li>
            <li><a href="#cursos" className="hover:text-pink-600 transition">Cursos</a></li>
            <li><a href="#exames" className="hover:text-pink-600 transition">Exames</a></li>
            <li><a href="#contacto" className="hover:text-pink-600 transition">Contacto</a></li>
          </ul>
        </div>
          {/* Páginas légais */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Informações legais</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/Privacy" className="hover:text-pink-600 transition">Política de Privacidade</Link></li>
            <li><Link to="/Cookies" className="hover:text-pink-600 transition">Política de Cookies</Link></li>
            <li><Link to="/LegalNotice" className="hover:text-pink-600 transition">Aviso Legal</Link></li>
          </ul>
        </div>

        {/* Redes sociais*/}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Siga-nos</h3>
          <div className="flex justify-center gap-5 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Em baixo de footer */}
      <div className="text-center text-gray-400 mt-10 text-sm">
        © {new Date().getFullYear()} CodeWay Academy. COPYRIGHT.
      </div>
    </footer>
  );
}

export default Footer;


