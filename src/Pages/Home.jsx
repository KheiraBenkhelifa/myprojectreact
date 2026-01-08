import React, { useState, useEffect } from "react";
import logo from "../assets/image2.jpg";
import { GoArrowUpRight } from "react-icons/go";
import ModalContact from "../Components/ModalContact";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nextExamDate = new Date("2025-11-15");
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    const today = new Date();
    const diffTime = nextExamDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Image de fundo de ecrã */}
      <img
        src={logo}
        alt=""
        className="w-full h-full object-cover brightness-75"
      />

      {/* Conteudo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16">
        <div className="flex flex-col justify-center gap-6 md:gap-8 max-w-3xl animate-fall">
          {/* Title */}
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
            APRENDA A PROGRAMAR GRATUITAMENTE.
          </h1>

          {/* Paragrafos */}
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md">
            Preparamos a próxima geração para os empregos de hoje e amanhã,
            através de educação de alta qualidade em desenvolvimento de software.
            Se tens mais de 18 anos, do que estás à espera?
          </p>

          {/* Butão */}
          <div className="flex justify-center">
            <button 
             onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full py-3 px-8 md:px-10 shadow-lg transition-all">
              Mais informações
              <GoArrowUpRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mensagem dinamica */}
        {daysLeft !== null && (
          <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
            <p className="text-pink-400 text-sm sm:text-lg font-bold font-serif animate-pulse">
              Próxima data de exame em {daysLeft} dias ({" "}
              {nextExamDate.toLocaleDateString()}).
            </p>
          </div>
        )}
      </div>
       <ModalContact isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
