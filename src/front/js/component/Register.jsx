import React, { useState } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const [register, setRegister] = useState({
    user_name: "",
    email: "",
    password: "",
    is_active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegister({
      ...register,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.BACKEND_URL + "/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Registro exitoso");
      navigate("/login")
    } else {
      alert("Error: " + result.msg);
    }
  }

  return (
    <div>
      <div className="window">
        <div className="window-header">
          <span className="title">Registro</span>
          <div className="buttons">
            <div className="button">_</div>
            <div className="button">☐</div>
            <div className="button">X</div>
          </div>
        </div>
        <div className="window-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="user_name">Nombre de usuario:</label>
            <input
              type="text"
              name="user_name"
              value={register.user_name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="is_active">
              <input
                type="checkbox"
                name="is_active"
                checked={register.is_active}
                onChange={handleChange}
              />
              ¿Activo?
            </label>

            <button type="submit" className="btn">
              Registrar
            </button>
          </form>
          <p className="p-2">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="link">
            Inicia sesión aquí
          </a>
        </p>
        </div>
      </div>
    </div>

  );
};

export default Register;