
import React from "react";
import Home from "./Pages/Home";
import Metodologia from "./Pages/Metodologia";
import Cursos from "./Pages/Cursos";
import Exames from "./Pages/Exames";
import Contacto from "./Pages/Contacto";

const MainPage = () => {
  return (
    <div className="scroll-smooth">
      <section id="home">
        <Home />
      </section>

      <section id="metodologia">
        <Metodologia />
      </section>

      <section id="exames">
        <Exames />
      </section>

      <section id="cursos">
        <Cursos />
      </section>

      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
};

export default MainPage;




