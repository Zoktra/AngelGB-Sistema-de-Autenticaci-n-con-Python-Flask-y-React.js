import React, { Component } from "react";

export const Footer = () => {
	return (
	  <div className="footer">
		<p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
		<div>
		  <button className="button">Inicio</button>
		  <button className="button">Ayuda</button>
		  <a href="/contact" className="link">Contactar</a>
		</div>
	  </div>
	);
  };
