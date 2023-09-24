import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
  const [mensaje, setMensaje] = useState('');

  const handleRegistroSubmit = (userData) => {
    
  };

  return (
    <div className="container">
      <h2>Crear una cuenta</h2>
      <div className="col-12 col-md-6">
          <p>Regístrate con:</p>
          <SocialButton icon="fa fa-facebook" />
          <SocialButton icon="fa fa-twitter" />
          <SocialButton icon="fa fa-google" />
        </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Formulario onSubmit={handleRegistroSubmit} />
          <Alert message={mensaje} />
        </div>
      
      </div>
    </div>
  );
};

export default Registro;
