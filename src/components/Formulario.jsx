import React, { useState } from 'react';

const Formulario = ({ onSubmit, setAlert }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmaContrasena, setConfirmaContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    confirmaContrasena: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    if (!nombre.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        nombre: 'El nombre es obligatorio.',
      }));
      formIsValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, nombre: '' }));
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'Ingrese un correo electrónico válido.',
      }));
      formIsValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, email: '' }));
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/;
    if (!contrasena.match(passwordPattern)) {
      setErrors((prevState) => ({
        ...prevState,
        contrasena:
          '6 caracteres maximo ',
      }));
      formIsValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, contrasena: '' }));
    }

    if (contrasena !== confirmaContrasena) {
      setErrors((prevState) => ({
        ...prevState,
        confirmaContrasena: 'Las contraseñas no coinciden.',
      }));
      formIsValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, confirmaContrasena: '' }));
    }

    if (formIsValid) {
      onSubmit({ nombre, email, contrasena });
      setMensaje('Registro exitoso. ¡Bienvenido!');
      setAlert({
        msg: mensaje,
        color: 'success',
        error: false
      });
    } else {
      setMensaje('');
      setAlert({
        msg:'Error en el  proceso de registro.',
        color: 'danger',
        error: true
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errors.nombre && (
            <div className="invalid-feedback">{errors.nombre}</div>
          )}
        </div>
        <div className="mb-2">
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-2">
          <input
            type="password"
            className={`form-control ${errors.contrasena ? 'is-invalid' : ''}`}
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          {errors.contrasena && (
            <div className="invalid-feedback">{errors.contrasena}</div>
          )}
        </div>
        <div className="mb-2">
          <input
            type="password"
            className={`form-control ${
              errors.confirmaContrasena ? 'is-invalid' : ''
            }`}
            placeholder="Confirma Contraseña"
            value={confirmaContrasena}
            onChange={(e) => setConfirmaContrasena(e.target.value)}
          />
          {errors.confirmaContrasena && (
            <div className="invalid-feedback">
              {errors.confirmaContrasena}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Registrarse
        </button>
      </form>
      {mensaje && <div className="alert alert-info mt-2">{mensaje}</div>}
    </div>
  );
};

export default Formulario;
