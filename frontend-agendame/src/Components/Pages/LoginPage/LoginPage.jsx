import React from 'react'
import Lottie from "lottie-react";
import LoginAnimation from "../../../Assets/Animations/LoginAstronaut.json"
import { HeaderWithOutLogin } from '../../Layout/HeaderWithOutLogin/HeaderWithOutLogin';
import { Footer } from '../../Layout/Footer/Footer';

export const LoginPage = () => {
  return (
    <div
      className="container-fluid row pt-0 m-0 justify-content-center align-items-center shadow pt-0 pb-1 mt-0 mb-0 rounded"
      style={{backgroundColor: "#ad1086"}}
    >
      <div
        className="col-md-5 d-flex flex-column justify-content-center align-items-center mt-0 mb-0 pb-1 bg-gradient-primary rounded"
      >
        <div style={{width: "90%", maxWidth: "400px"}}>
          <Lottie animationData={LoginAnimation} loop={true} />
        </div>
        <form className="fw-bold w-100" method="post" action="/login">
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="E-mail"
            />
            <label htmlFor="floatingInput">E-mail*</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control fw-bold"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Contraseña*</label>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary mt-2 pt-2 pb-2 fs-5 fw-bold rounded-pill"
            >
              Iniciar sesión
            </button>
          </div>
          <p className="text-center link-light p-3">
            <a className="text-center align-center h5 link-light" href="/"
              >Volver al Inicio </a>
          </p>
        </form>
      </div>
    </div>
  )
}
