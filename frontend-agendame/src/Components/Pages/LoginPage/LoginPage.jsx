import React, { useState } from 'react'
import Lottie from "lottie-react";
import LoginAnimation from "../../../Assets/Animations/LoginAstronaut.json"
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';


export const LoginPage = () => {

  const [userData, setUserData] = useState({})
  const [dataFormLogin, setDataFormLogin] = useState({})
  const { register, handleSubmit, watch, formState : { errors } } = useForm();
  
  const onSubmit = data => console.log(data);
  console.log(watch("email"))
  console.log(watch("password"))

  // const body = {
  //   email: watch("email"),
  //   password: watch("password")
  // }

  // function sendLogin (data) {
  //   const bodyRequestLogin = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  //   }
  //     fetch('http://127.0.0.1:8000/login', bodyRequestLogin)
  //     .then(response => {
  //       console.log("🚀 ~ file: LoginPage.jsx ~ line 27 ~ customSubmit ~ response", response)
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log("🚀 ~ file: LoginPage.jsx ~ line 31 ~ customSubmit ~ data", data)
  //       return setUserData(data)
  //     })
  // }

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
        <form onSubmit={handleSubmit(onSubmit)} className="fw-bold w-100">
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control fw-bold"
              id="floatingInput"
              placeholder="E-mail"
              {...register("email",{
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
              type="password"
              name="password"
              className="form-control fw-bold"
              id="floatingPassword"
              placeholder="Password"
              {...register("password",{
                required: true,
                min: 1,
                max: 50
              })}
            />
            {errors.password?.type === "required" &&
            <small className="fail text-white">No puede estar el campo vacio </small>}
            {errors.password?.type === "maxLength" &&
            <small className="fail text-white">No puede escribir más de 50 caracteres</small>}

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
            <NavLink to="/" className="text-center align-center h5 link-light">Volver al Inicio</NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}
