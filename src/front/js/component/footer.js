import React, { Component } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="footer d-flex justify-content-start align-items-center p-1">
			<div className="dropup">
				<button type="button" className="btn p-0 border-0" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a97bf8e2-19dd-4d0d-bce2-0d9e12eaa48a/dgj25p5-80c7ac8d-b290-4bc6-b850-726674355b48.png/v1/fill/w_977,h_374,q_80,strp/i_made_the_windows95_start_button__by_nathandasilva_dgj25p5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc0IiwicGF0aCI6IlwvZlwvYTk3YmY4ZTItMTlkZC00ZDBkLWJjZTItMGQ5ZTEyZWFhNDhhXC9kZ2oyNXA1LTgwYzdhYzhkLWIyOTAtNGJjNi1iODUwLTcyNjY3NDM1NWI0OC5wbmciLCJ3aWR0aCI6Ijw9OTc3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3HjOiVulL5qg8XuWJyys_bvT62alteM1YZDTy1lwvbY" style={{ width: '75px' }} alt="" />

				</button>
				<ul className="dropdown-menu windows95-menu">
				<Link className="estilo" to={"/"} >
					<li className="dropdown-item">Registro</li>
				</Link>
				<Link className="estilo" to={"/login"} >
					<li className="dropdown-item">Login</li>
				</Link>
				<Link className="estilo" to={"/dashboard"} >
					<li className="dropdown-item">Área privada</li>
				</Link>
				</ul>
			</div>
		</div>
	);
};
