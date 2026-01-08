import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const sections = [
    { id: "home", label: "Home" },
    { id: "metodologia", label: "Metodologia" },
    { id: "exames", label: "Exames" },
    { id: "cursos", label: "Cursos" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-50 backdrop-blur-md text-white shadow-xl p-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-3xl font-bold italic font-serif">
        <Link to="/" className="hover:text-pink-500 transition">
          Code<span className="text-pink-600">Way</span> Academy
        </Link>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-8">
          {isMainPage
            ? sections.map((section) => (
                <li key={section.id} className="hover:text-pink-500 transition">
                  <ScrollLink
                    to={section.id}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    activeClass="text-pink-600 font-bold border-b-2 border-pink-600"
                    className="cursor-pointer"
                  >
                    {section.label}
                  </ScrollLink>
                </li>
              ))
            : (
                <li className="hover:text-pink-500 transition">
                  <Link to="/">Home</Link>
                </li>
              )}
        </ul>

        {/* Botões Login & Register */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white transition"
          >
            Registar
          </Link>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden cursor-pointer" onClick={handleClick}>
        {nav ? <FaTimes size={25} /> : <FaAlignJustify size={25} />}
      </div>

      
      {nav && (
        <ul className="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center space-y-8 text-2xl font-semibold transition-all duration-300">
          <div
            className="text-white absolute top-6 right-6 cursor-pointer"
            onClick={handleClick}
          >
            <FaTimes size={25} />
          </div>

          {isMainPage
            ? sections.map((section) => (
                <li key={section.id}>
                  <ScrollLink
                    to={section.id}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    spy={true}
                    activeClass="text-pink-500"
                    className="cursor-pointer hover:text-pink-500 transition"
                    onClick={() => setNav(false)}
                  >
                    {section.label}
                  </ScrollLink>
                </li>
              ))
            : (
                <li>
                  <Link
                    to="/"
                    className="cursor-pointer hover:text-pink-500 transition"
                    onClick={() => setNav(false)}
                  >
                    Home
                  </Link>
                </li>
              )}

          {/* Butões Login & Register no menu mobile */}
          <li>
            <Link
              to="/login"
              onClick={() => setNav(false)}
              className="px-6 py-3 bg-pink-600 rounded-full text-white hover:bg-pink-700 transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              onClick={() => setNav(false)}
              className="px-6 py-3 border border-pink-600 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition"
            >
              Registar
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;



