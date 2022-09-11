import React from "react";
import logoMisionTic from "../../../Assets/Img/Logo-misionTic2022-250pxW.png";
import UTPblanco from "../../../Assets/Img/UTP_blanco.png";

export const Footer = () => {
  return (
    <footer className="container-fluid mt-0 pt-0 rounded">
      <div className="row ">
        <section className="bg-info">
          <div className="row text-align-middle p-4 border-top bgDarkApp">
            <div className="col-sm-3">
              <img
                src={logoMisionTic}
                alt=""
                height="80px"
                width="150"
                className="src align-content-center text-center mx-auto d-block"
              />
            </div>
            <div className="col-sm-7">
              <h4 className="h4 text-center text-light">
                Misión Tic 2022 - Ruta 2
              </h4>
              <div className="row w-100">
                <div className="col">
                  <p className="text-center text-light p-0 m-0">
                    Luis Armando Montilla Andrade
                  </p>
                  <p className="text-center text-light p-0 m-0">
                    Juan Carlos Ramos M.
                  </p>
                </div>
                <div className="col">
                  <p className="text-center text-light p-0 m-0">
                    Cristian Leandro Pérez Peláez
                  </p>
                  <p className="text-center text-light p-0 m-0">
                    Jhonnatan Mauricio Dioza Zambrano
                  </p>
                  <p className="text-center text-light p-0 m-0">
                    Dana Cotes Cala
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <img
                src={UTPblanco}
                alt=""
                height="80px"
                width="150"
                className="src align-content-center text-center mx-auto d-block"
              />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
