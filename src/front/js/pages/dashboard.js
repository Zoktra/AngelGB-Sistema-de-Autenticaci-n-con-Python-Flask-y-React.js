import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true); // Estado para controlar la carga inicial
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      const storedUserName = localStorage.getItem("user_name");

      if (!token) {
        navigate("/login", { replace: true });
        alert("No ha iniciado sesion. Redirigiendo al login...");
        return;
      }

        const response = await fetch(process.env.BACKEND_URL + "/api/private", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setUserName(storedUserName);
          setLoading(false);
        }
    };

    getUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Sesión cerrada. Redirigiendo al login...");
    navigate("/login", { replace: true });
  };

  if (loading) {
    return <div className="text-center mt-5">Cargando...</div>;
  }

  return (
    <div className="text-center mt-5">
      <div className="window">
        <div className="window-header">
          <span className="title">Área secreta</span>
          <div className="buttons">
            <div className="button">_</div>
            <div className="button">☐</div>
            <div className="button">X</div>
          </div>
        </div>
        <div className="window-body">
          <h1>Bienvenido, {userName}!</h1>
          <p>Esta es tu área privada. Gracias por confiar en nosotros.</p>
          <p>
          Hola, soy Windows 95, y quiero ser tu nuevo sistema operativo. Estoy aquí para llevarte al futuro, un futuro donde tu PC será más rápido, más intuitivo y mucho más fácil de usar. Olvídate de esas pantallas en dos colores y esos sistemas complicados. 
                Con mi interfaz gráfica de usuario y el revolucionario botón de inicio, todo lo que necesitas está a un clic de distancia. Y lo mejor de todo, ¡estamos solo comenzando! 
                Si te quedas conmigo ahora, podrás disfrutar de mejoras continuas y, lo más emocionante, con toda esta "xp" tenemos mucha "vista" y estamos incluso pensando en Windows 98. 
                Imagínate lo que podremos hacer juntos cuando llegue: más estabilidad, mejor rendimiento y todo con la promesa de que las pantallas azules de la muerte serán un recuerdo lejano. ¡El futuro es prometedor, y empieza con Windows 95
          </p>
          <button className="btn" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};