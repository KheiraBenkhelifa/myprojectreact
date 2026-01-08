

import React, { useState, useEffect } from "react";



const Contacto = () => {
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
   const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xjkajlor", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        throw new Error("Erreur d’envoi");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 py-16 px-6 flex flex-col items-center">
      {/* Titlo principal */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 p-16">
          Contacta-nos
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Tens dúvidas ou queres saber mais sobre os nossos cursos e exames?
          Entra em contacto connosco. Estamos aqui para ajudar!
        </p>
      </div>

      {/* Conteudo principal */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Formulare de contacto */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-6"
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="O teu nome"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="O teu email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              placeholder="Escreve a tua mensagem..."
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

         <button
                type="submit"
                disabled={status === "sending"}
                className={`bg-pink-600 text-white py-3 rounded-lg font-semibold transition ${
                  status === "sending"
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-pink-700"
                }`}
              >
                Enviar mensagem
              </button>
              
        {status === "success" && (
          <p className="text-green-600 text-center mt-4">
            ✅ Mensagem enviada com sucesso!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            ❌ Erro ao enviar. Tenta novamente.
          </p>
        )}
        </form>
       

        {/* Informações de contacto */}
        <div className="bg-gray-800 text-white p-8 rounded-2xl flex flex-col justify-between shadow-md">
          <div>
            <h2 className="text-3xl font-bold mb-6">Informações de Contacto</h2>
            <p className="mb-4 text-gray-300">
              📍 Rua das Academias, 123 – Porto, Portugal
            </p>
            <p className="mb-4 text-gray-300">📞 +351 912 345 678</p>
            <p className="mb-4 text-gray-300">📧 info@codewayacademy.pt</p>
            <p className="text-gray-300">
              🕐 Segunda a Sexta: 09:00 – 18:00
            </p>
          </div>

          {/* Integrar a mapa */}
          <div className="mt-8">
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.842214329741!2d-8.611!3d41.1499999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e5d3c0d0a5%3A0x123456789abc!2sPorto%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1698500000000!5m2!1spt-PT!2spt"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border-2 border-pink-600"
            ></iframe>
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default Contacto;


