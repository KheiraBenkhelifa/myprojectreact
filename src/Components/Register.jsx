import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verificar se o utilizadore existe 
      const checkResponse = await fetch("http://localhost:3000/users");
      const users = await checkResponse.json();
      const existingUser = users.find((u) => u.email === form.email);

      if (existingUser) {
        setMessage("Este e-mail já está registado.");
        return;
      }

      // Envio de novo utilizador (POST)
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: Date.now(),
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (response.ok) {
        setMessage("Registo efetuado com sucesso!");
        setForm({ name: "", email: "", password: "" });
        setTimeout(() => navigate("/"), 1500); 
      } else {
        setMessage("Erro ao registar. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erro de ligação com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Registo</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80 bg-white p-6 shadow-md rounded-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Palavra-passe"
          value={form.password}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-pink-600 text-white p-2 rounded hover:bg-pink-700 transition"
        >
          Registar
        </button>
        {message && <p className="text-center text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}

export default Register;


