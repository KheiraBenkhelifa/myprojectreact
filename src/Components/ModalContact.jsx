import React, { useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

function ModalContact({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle"); 

  if (!isOpen) return null;

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
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-8 w-11/12 md:w-1/2 lg:w-1/3 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* botão fechar*/}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-pink-600"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        {/* conteudo*/}
        {status === "success" ? (
          <div className="flex flex-col items-center text-center space-y-4">
            <FaCheckCircle className="text-green-500" size={50} />
            <h2 className="text-2xl font-bold text-gray-800">
              Mensagem enviada com sucesso! 🎉
            </h2>
            <p className="text-gray-600">
              Obrigado por entrar em contacto. Responderemos o mais rápido possível.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Fechar
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Contacte-nos
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="O seu nome"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="O seu email"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="A sua mensagem..."
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`bg-pink-600 text-white py-3 rounded-lg font-semibold transition ${
                  status === "sending"
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-pink-700"
                }`}
              >
                {status === "sending" ? "A enviar..." : "Enviar mensagem"}
              </button>
            </form>

            {status === "error" && (
              <p className="text-red-500 text-center mt-3">
                ❌ Ocorreu um erro. Tente novamente.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ModalContact;

