import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

export const RegisterPage = () => {
  
  const { register, handleSubmit, watch ,formState : { errors } } = useForm();
  
  const customSubmit = data => console.log(data);

  return (
    <div
      className="container-fluid row pt-0 m-0 justify-content-center align-items-center vh-100 shadow pt-2 pb-1 mt-0 mb-0 rounded"
      style={{backgroundColor: "#5405ef"}}
    >
      <div className="col-xl-7 justify-content-lg-center mt-0 mb-0 pb-1 bg-gradient-primary rounded">
        <h2 className="h2 text-center mb-3 fw-bold text-light">Regístrate Ahora</h2>

        <form onSubmit={handleSubmit(customSubmit)} className="fw-bold">
          <div className="form-floating mb-3">
            <input
              type="text"
              name="nombre"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="Nombre"
              required
            />
            <label htmlFor="floatingInput">Nombre*</label>
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
            <label htmlFor="floatingInput">Apellido*</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              name="edad"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="Edad"
              required
            />
            <label htmlFor="floatingInput">Edad*</label>
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
            <label htmlFor="floatingInput">Ocupación*</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="email"
              {...register("emailRegister",{
                required: true,
                min: 10,
                max: 100,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
              })}
            />
            {errors.email?.type === "required" &&
            <small className="fail text-white">No puede estar el campo vacio </small>}
            {errors.email?.type === "maxLength" &&
            <small className="fail text-white">No puede escribir más de 100 caracteres</small>}
            {errors.email?.type === "pattern" &&
            <small className="fail text-white">Digite una dirección de e-mail válida</small>}

            <label htmlFor="floatingInput">E-mail*</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              name="password"
              className="form-control fw-bold"
              id="floatingPassword"
              placeholder="Password"
              {...register("passwordRegister",{
                required: true,
                min: 8,
                max: 50,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
              })}
            />
            {errors.password?.type === "required" &&
            <small className="fail text-white">No puede estar el campo vacio </small>}
            {errors.password?.type === "maxLength" &&
            <small className="fail text-white">No puede escribir más de 50 caracteres</small>}
            {errors.password?.type === "pattern" &&
            <small className="fail text-white text-center">La contraseña debe se de minimo 8 caracteres y contener minimo:<br/> 1 mayúscula, 1 miúscula y 1 número</small>}

            <label htmlFor="floatingPassword">Contraseña*</label>
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
            <NavLink to="/" className="text-center align-center h5 link-light">Volver al Inicio</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
