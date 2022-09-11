import React from "react";
import Lottie from "lottie-react";
import editAnimation from "../../../Assets/Animations/edit.json";
import deleteAnimation from "../../../Assets/Animations/delete.json";
import searchAnimation from "../../../Assets/Animations/search.json";

export const DashboardPage = () => {
  return (
    <div className="d-flex justify-content-center">
    <div
      className="container-md ms-0 me-0 row mt-md-5 mb-5 mt-0 pb-3"
      style={{ backgroundColor: "#00000098", borderRadius: "15px" }}
    >
      <div className="col-xl-7 pt-2">
        <h2 className="h2 text-center pt-2 pb-2 text-light mb-0 rounded fw-bold">
          Próximos Eventos
        </h2>

        <table className="table mt-0 table-dark table-striped table-hover table-bordered table-fluid bg-white align-middle table-md rounded">
          <thead
            className="container-fluid text-light fw-bold text-center"
            style={{ backgroundColor: "#0d6efd" }}
          >
            <tr>
              <td>DETALLE</td>
              <td>HORA</td>
              <td>FECHA</td>
              <td>LUGAR</td>
              <td>OPCIONES</td>
            </tr>
          </thead>
          <br />
          <tbody className="container-fluid text-center h6">
            <tr>
              <td>descriocion del detalle</td>
              <td>esta es hora</td>
              <td>esta es fecha</td>
              <td className="">este es lugar</td>
              <td className="row container-fluid m-0 p-0">
                <a
                  href="/editar/{{i.0}}"
                  className="col btn btn-primary d-sm-grid mb-1 m-1 fw-bold d-flex flex-column justify-content-center"
                >
                  <div className="d-flex justify-content-center" style={{ width: "30px", height: "30px" }}>
                    <Lottie animationData={editAnimation} loop={true} />
                  </div>
                  Editar
                </a>

                <a
                  href="/eliminar/{{i.0}}"
                  className="col btn btn-danger d-sm-grid mb-1 m-1 fw-bold d-flex flex-column justify-content-center"
                >
                  <div className="d-flex justify-content-center" style={{ width: "30px", height: "30px" }}>
                    {/* LOTTIE ELIMINAR */}
                    <Lottie animationData={deleteAnimation} loop={true} />
                  </div>
                  Eliminar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-xl-5 d-flex flex-column align-items-center">
        <h2 className="h2 text-center pt-5 text-light fw-bold">
          Consultar Evento
        </h2>

        <div style={{ width: "300px", height: "300px" }}>
          {/* LOTTIE SEARCH */}
          <Lottie animationData={searchAnimation} loop={true} />
        </div>

        <div className="col-fluid-3 w-100">
          <form
            className="mb-3 container-fluid row p-0 justify-content-center"
            action="/filtroDescripcion"
            method="post"
          >
            <input
              className="col-7 rounded-pill fw-bold"
              type="text"
              name="descripcion"
              id=""
              placeholder="Descripción"
              required
            />
            <button
              className="col-4 ms-2 btn btn-success rounded-pill fw-bold"
              type="submit"
            >
              Consultar
            </button>
          </form>
        </div>

        <div className="col-fluid-3 w-100">
          <form
            className="mb-3 container-fluid row p-0 justify-content-center"
            action="/filtroHora"
            method="post"
          >
            <input
              className="col-7 rounded-pill fw-bold"
              type="time"
              name="hora"
              id=""
              placeholder="Hora"
              value="08:00:00"
              required
            />
            <button
              className="col-4 ms-2 btn btn-success rounded-pill fw-bold"
              type="submit"
            >
              Consultar
            </button>
          </form>
        </div>

        <div className="col-fluid-3 w-100">
          <form
            className="mb-3 container-fluid row p-0 justify-content-center"
            action="/filtroFecha"
            method="post"
          >
            <input
              className="col-7 rounded-pill fw-bold"
              type="date"
              name="fecha"
              id=""
              placeholder="Fecha"
              value="{{today}}"
              min="{{today}}"
              required
            />
            <button
              className="col-4 ms-2 btn btn-success rounded-pill fw-bold"
              type="submit"
            >
              Consultar
            </button>
          </form>
        </div>

        <div className="col-fluid-3 w-100">
          <form
            className="mb-3 container-fluid row p-0 justify-content-center"
            action="/filtroLugar"
            method="post"
          >
            <input
              className="col-7 rounded-pill fw-bold"
              type="text"
              name="lugar"
              id=""
              placeholder="Lugar"
              required
            />
            <button
              className="col-4 col-xs-12 ms-2 btn btn-success rounded-pill fw-bold"
              type="submit"
            >
              Consultar
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
