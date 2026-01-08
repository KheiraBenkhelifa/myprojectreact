import React, { useEffect, useState } from "react";

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o utilizador aceitou os cookies
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-5 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
      <p className="text-sm md:text-base mb-3 md:mb-0">
         Este site utiliza cookies para melhorar a sua experiência. Ao continuar, aceita a nossa política de cookies.
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleAccept}
          className="bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Aceitar
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
