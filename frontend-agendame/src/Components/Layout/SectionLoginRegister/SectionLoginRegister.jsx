import React from "react";
import Lottie from "lottie-react";
import LoginAnimation from "../../../Assets/Animations/LoginAstronaut.json"
import RegisterAstronaut from "../../../Assets/Animations/RegisterAstronaut.json"
import { NavLink } from "react-router-dom";

export const SectionLoginRegister = () => {
  return (
    <div className="row ">
      <div className="col-sm-6 pt-5 pb-5 fucsiaMisionTic d-flex flex-column align-items-center">
        <h2 className="h2 text-center fw-bold text-light">¿Tienes cuenta?</h2>
        <div style={{width: "90%", maxWidth: "400px"}}>
          <Lottie animationData={LoginAnimation} loop={true} />
        </div>
        <div className="d-grid">
          <NavLink to="/login" 
            className="btn btn-primary pt-3 pb-3 ps-5 pe-5 fs-4 fw-bold rounded-pill"
            >
              ¡Inicia Sesión Ahora!
          </NavLink>
        </div>
      </div>

      <div className="col-sm-6 pt-5 pb-5 moradoMisionTic d-flex flex-column align-items-center">
        <h2 className="h2 text-center fw-bold text-light">
          ¡Haz parte de nuestros usuarios!
        </h2>
        <div style={{width: "90%", maxWidth: "400px"}}>
          <Lottie animationData={RegisterAstronaut} loop={true} />
        </div>

        <div className="d-grid">
          <NavLink to="/registro"
          className="btn btn-primary pt-3 pb-3 ps-5 pe-5 fs-4 fw-bold rounded-pill"
          >
            ¡Regístrate Ahora!
          </NavLink>
        </div>
      </div>
    </div>
  );
};
