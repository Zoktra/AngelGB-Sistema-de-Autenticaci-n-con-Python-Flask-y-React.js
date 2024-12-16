import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

const LoginForm = () => {
  const [login, setLogin] = useState({
    user_name: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const response = await fetch(process.env.BACKEND_URL + "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user_name", login.user_name);
        alert("Inicio de sesión exitoso");
        navigate("/dashboard");
      } else {
        setErrorMessage(result.msg || "Error en el inicio de sesión");
      }
    
  };

  return (
    <div className="window">
      <div className="window-header">
        <span className="title">Iniciar Sesión</span>
        <div className="buttons">
          <div className="button">_</div>
          <div className="button">☐</div>
          <div className="button">X</div>
        </div>
      </div>
      <div className="window-body">
        {errorMessage && <p className="error">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="user_name">Nombre de usuario:</label>
          <input
            type="text"
            name="user_name"
            value={login.user_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">
            Iniciar Sesión
          </button>
        </form>
        <p className="p-2">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="link">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;