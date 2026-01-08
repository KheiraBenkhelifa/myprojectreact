import React, { useState, useEffect } from "react";
import ModalContact from "../Components/ModalContact";
import { GoArrowUpRight } from "react-icons/go";

const cursos = [
  {
    id: 1,
    nome: "Desenvolvimento Web Front-End",
    descricao:
      "Aprende HTML, CSS, JavaScript e React. Cria websites modernos, responsivos e profissionais prontos para o mercado.",
    duracao: "6 meses",
  },
  {
    id: 2,
    nome: "Desenvolvimento Back-End",
    descricao:
      "Forma-te como programador back-end aprendendo Node.js, Express e bases de dados. Ideal para quem gosta de lógica e servidores.",
    duracao: "6 meses",
  },
  {
    id: 3,
    nome: "Introdução à Programação",
    descricao:
      "Perfeito para iniciantes. Aprende os fundamentos da programação e constrói uma base sólida para qualquer linguagem.",
    duracao: "3 meses",
  },
  {
    id: 4,
    nome: "Cibersegurança",
    descricao:
      "Descobre como proteger sistemas e dados contra ataques. Aprende boas práticas e ferramentas usadas por especialistas.",
    duracao: "4 meses",
  },
  {
    id: 5,
    nome: "Design UX/UI",
    descricao:
      "Aprende a criar interfaces intuitivas e experiências de utilizador incríveis. Mistura criatividade com tecnologia.",
    duracao: "5 meses",
  },
  {
    id: 5,
    nome: "Desenvolvimento Full Stack",
    descricao:
      "Aprende a criar interfaces intuitivas e experiências de utilizador incríveis. Mistura criatividade com tecnologia.",
    duracao: "5 meses",
  },
];

const Cursos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 py-16 px-6">
      {/* Titlo principal */}
      <div className="text-center mb-12 p-20">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Os Nossos Cursos
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Escolhe o curso ideal para o teu futuro. Aprende com professores
          experientes e métodos práticos.
        </p>
      </div>

      {/* Os cursus  */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition"
          >
            <div>
              <h2 className="text-2xl font-bold text-pink-700 mb-3">
                {curso.nome}
              </h2>
              <p className="text-gray-700 mb-4">{curso.descricao}</p>
              <p className="text-sm text-gray-600">
                <strong>Duração:</strong> {curso.duracao}
              </p>
            </div>

            <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 flex items-center justify-center gap-2 bg-pink-600 text-white font-bold py-2 rounded-full hover:bg-gray-700 transition">
              Inscrever-se
              <GoArrowUpRight />
            </button>
            <ModalContact isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        ))}
        </div>
    </div>
  );
};

export default Cursos;
