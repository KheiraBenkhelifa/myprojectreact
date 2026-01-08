import { div } from 'framer-motion/client';
import React from 'react'



const Metodologia = () => {

 const horarios = [
    { mes: "Setembro", curso: "Iniciação à Programação", horario: "18h - 20h" },
    { mes: "Outubro", curso: "JavaScript Avançado", horario: "18h - 21h" },
    { mes: "Novembro", curso: "React e Front-End", horario: "19h - 22h" },
    { mes: "Dezembro", curso: "Projetos Práticos", horario: "18h - 20h" },
    { mes: "Janeiro", curso: "Exames e Revisões", horario: "17h - 19h" },
    { mes: "Fevereiro", curso: "Exames e Revisões", horario: "17h - 19h" },
    { mes: "Março", curso: "Exames e Revisões", horario: "17h - 19h" },
    { mes: "Abril", curso: "Exames e Revisões", horario: "17h - 19h" },
    { mes: "Maio", curso: "Exames e Revisões", horario: "17h - 19h" },
    { mes: "Junho", curso: "Exames e Revisões", horario: "17h - 19h" },
  ];



  return (
    <div className="relative w-full px-6 sm:px-10 md:px-20 py-16 sm:py-24 flex flex-col  items-center text-center min-h-screen">
        <div className="relative px-6 sm:px-10 md:px-20 py-16 sm:py-24 flex flex-col  items-center text-center">
            {/*Introduçao*/}
        <h1 className="text-3xl text-pink-600 sm:text-4xl md:text-5xl  font-serif font-extrabold mb-8">  A Nossa Metodologia</h1>
        <p className="max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed mb-12">
          Acreditamos numa aprendizagem prática, baseada em projetos e desafios reais. 
          Os nossos alunos aprendem a programar resolvendo problemas do mundo real, 
          com o acompanhamento de tutores experientes e materiais atualizados.  
          Cada módulo é desenhado para preparar-te para o mercado de trabalho.
        
        </p>
        </div>
        {/*Tabela*/}

         <div className="w-full max-w-4xl overflow-x-auto bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
          <table className="w-full text-left border-collapse text-white">
            <thead>
              <tr className="bg-pink-600 text-white uppercase items-center text-sm sm:text-base">
                <th className="p-3 sm:p-4 text-center">Mês</th>
                <th className="p-3 sm:p-4 text-center">Curso</th>
                <th className="p-3 sm:p-4 text-center">Horário</th>
              </tr>
            </thead>
            
             <tbody>
              {horarios.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/20 transition duration-200 border-b border-white/20"
                >
                  <td className="p-3 sm:p-4 text-black text-center">{item.mes}</td>
                  <td className="p-3 sm:p-4 text-black text-center">{item.curso}</td>
                  <td className="p-3 sm:p-4 text-black text-center">{item.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      {/*Metodologia de ensino*/}
         <div className="max-w-6xl text-center p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-12">
          Por que escolher nossa metodologia?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800/70 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Aprendizado Ativo</h3>
            <p className="text-black font-semibold from-neutral-950">
              Nossos alunos aprendem fazendo — com exercícios, desafios e projetos práticos que refletem o ambiente real de trabalho.
            </p>
          </div>

          <div className="bg-gray-800/70 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Acompanhamento Personalizado</h3>
            <p className="text-black font-semibold from-neutral-950">
              Cada estudante recebe suporte individual de mentores experientes, garantindo um progresso constante e sólido.
            </p>
          </div>

          <div className="bg-gray-800/70 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-pink-600  mb-3">Foco no Mercado</h3>
            <p className="text-black font-semibold from-neutral-950">
              Nossa metodologia está alinhada com as exigências do mercado de tecnologia, preparando os alunos para oportunidades reais.
            </p>
          </div>
        </div>
      </div>
        
        
        
        
        
        
        </div>


 
      
         
  );
};

export default Metodologia;


