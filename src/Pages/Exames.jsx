
import React, { useState, useEffect } from "react";
import ModalContact from "../Components/ModalContact";
import { GoArrowUpRight } from "react-icons/go";

const exames = [
  {
    id: 1,
    nome: "Inteligência Artificial",
    descricao:
      "Para programadores e engenheiros de software. Domina as ferramentas necessárias para construir aplicações com LLMs.",
    datas: ["2025-09-15", "2025-12-10"],
  },
  {
    id: 2,
    nome: "Inteligência Artificial",
    descricao:
      "Para programadores e engenheiros de software. Domina as ferramentas necessárias para construir aplicações com LLMs.",
    datas: ["2025-10-20", "2026-02-12"],
  },
  {
    id: 3,
    nome: "Inteligência Artificial",
    descricao:
      "Para programadores e engenheiros de software. Domina as ferramentas necessárias para construir aplicações com LLMs.",
    datas: ["2025-11-05", "2026-03-01"],
  },
  {
    id: 4,
    nome: "Inteligência Artificial",
    descricao:
      "Para programadores e engenheiros de software. Domina as ferramentas necessárias para construir aplicações com LLMs.",
    datas: ["2025-12-20", "2026-04-15"],
  },
];

const Exames = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 py-16 px-6">
      {/* Titlo principal */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 p-14">
          Exames de Acesso
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Prepara-te para os principais exames nacionais. Encontra todas as
          informações sobre as datas, requisitos e fases de cada exame.
        </p>
      </div>

      {/* Lista dos exames */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {exames.map((exam) => (
          <div
            key={exam.id}
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500  shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h2 className="text-2xl font-bold text-pink-700 mb-3">
                {exam.nome}
              </h2>
              <p className="text-gray-700 mb-4">{exam.descricao}</p>

              <div className="text-sm text-gray-600">
                <strong>Próximas datas:</strong>
                <ul className="list-disc list-inside">
                  {exam.datas.map((d, i) => (
                    <li key={i}>{new Date(d).toLocaleDateString()}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
           onClick={() => setIsModalOpen(true)}
            className="mt-6 flex items-center justify-center gap-2 bg-pink-600 text-white font-bold py-2 rounded-full hover:bg-gray-700 transition">
              Contactar
              <GoArrowUpRight />
            </button>
          
          </div>
        ))}
        <ModalContact isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
     
    </div>
  );
};

export default Exames;


