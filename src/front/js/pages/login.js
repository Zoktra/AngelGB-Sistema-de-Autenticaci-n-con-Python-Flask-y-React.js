import React, { use, useContext, useEffect } from "react";
import "../../styles/home.css";
import LoginForm from "../component/LoginForm.jsx";

export const Login = () => {


    return (
        <div className="text-center mt-5">
            <LoginForm />
        </div>
    )
}