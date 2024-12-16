import React, { use, useContext, useEffect } from "react";
import "../../styles/home.css";
import Register from "../component/Register.jsx";

export const Home = () => {

	// useEffect(() => {
	// 	fetch
	// }, [])

	return (
		<div className="text-center mt-5">
			<Register />
		</div>
	);
};
