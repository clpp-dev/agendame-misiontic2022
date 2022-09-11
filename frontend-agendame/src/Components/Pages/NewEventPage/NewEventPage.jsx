import React from "react";

export const NewEventPage = () => {
  return (
    <div className="container-xl w-md-100 pt-2 d-flex justify-content-center align-items-center rounded">
      <div className="col-xl-9 mt-5 d-flex align-content-center">
        <form
          className="mt-6 p-5 mb-5 fw-bold w-100"
          style={{ backgroundColor: "#00000098", borderRadius: "15px" }}
          method="post"
          action="/registroevento"
        >
          <h2
            className="text-center mb-3 text-light fw-bold"
            style={{ fontSize: "45px" }}
          >
            Nuevo evento
          </h2>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              id="floatingInput"
              placeholder="Descripcion"
              required
            />
            <label htmlFor="floatingInput">Descripción</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="time"
              name="hora"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="Hora"
              required
            />
            <label htmlFor="floatingInput">Hora</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              name="fecha"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="Fecha"
              min="{{today}}"
              required
            />
            <label htmlFor="floatingInput ">Fecha</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text "
              name="lugar"
              className="form-control"
              id="floatingInput "
              placeholder="Lugar"
              required
            />
            <label htmlFor="floatingInput ">Lugar</label>
          </div>
          <div className="d-grid">
            <button
              type="submit "
              className="btn btn-primary m-2 p-2 mt-2 pt-2 pb-2 text-light fw-bold fs-4"
              style={{ backgroundColor: "#5405EF", borderColor: "#fff" }}
            >
              Agregar Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
