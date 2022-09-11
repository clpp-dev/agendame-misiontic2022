import React from "react";
import LogoAgendame from "../../../Assets/Img/logoAgenda.png"

export const NavBar = () => {
  return (
    <div className="container-xl w-md-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/inicio">
            <img
              src={LogoAgendame}
              alt=""
              width="40"
              height="40"
            />
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav justify-content-center">
                <a
                  className="nav-link h4 active fw-bold text-light"
                  aria-current="page"
                  href="/dashboard"
                >
                  Inicio
                </a>
              </li>

              <li className="nav-item nav justify-content-center">
                <a
                  className="nav-link h4 active fw-bold text-light"
                  href="/newevent"
                >
                  Nuevo Evento
                </a>
              </li>

              <li className="nav-item fw-bold nav justify-content-center align-self-center">
                <a
                  className="nav-link, h4 btn btn-danger float-end fw-bold text-light align-self-end"
                  href="/logout"
                >
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
