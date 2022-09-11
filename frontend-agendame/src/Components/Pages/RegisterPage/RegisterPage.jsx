import React from "react";

export const RegisterPage = () => {
  return (
    <div
      className="container-fluid row pt-0 m-0 justify-content-center align-items-center vh-100 shadow pt-2 pb-1 mt-0 mb-0 rounded"
      style={{backgroundColor: "#5405ef"}}
    >
      <div className="col-xl-7 justify-content-lg-center mt-0 mb-0 pb-1 bg-gradient-primary rounded">
        <h2 className="h2 text-center mb-3 fw-bold text-light">Regístrate Ahora</h2>

        <form className="fw-bold" method="post" action="/registrousuario">
          <div className="form-floating mb-3">
            <input
              type="text"
              name="nombre"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="Nombre"
              required
            />
            <label for="floatingInput">Nombre*</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              name="apellido"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="Apellido"
              required
            />
            <label for="floatingInput">Apellido*</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              name="edad"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="Edad"
              required
            />
            <label for="floatingInput">Edad*</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              name="ocupacion"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="Ocupacion"
              required
            />
            <label for="floatingInput">Ocupación*</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="email"
              required
            />
            <label for="floatingInput">E-mail*</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control fw-bold"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Contraseña*</label>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary mt-2 pt-2 pb-2 fs-5 fw-bold rounded-pill"
            >
              Registrarse
            </button>
          </div>

          <p className="text-center link-light p-3">
            <a className="text-center align-center h5 link-light" href="/">
              Volver al Inicio
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
