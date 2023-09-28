import { useState } from "react";
import Alerta from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

export const Registro = () => {
  const [alert, setAlert] = useState({ msg: '', color: '' });

  const handleSubmit = (formData) => {
   
    console.log('Form Data:', formData);
 
  };

  return (
    <>
      <div className="registro">
        <h3 className="tituloRegistro">Crea una cuenta</h3>
        <div className="conteinerSocialButton">
          <SocialButton href="https://www.facebook.com/home.php" icono='fa-brands fa-facebook fa-lg'/>
          <SocialButton href="https://github.com/Nuncia" icono="fa-brands fa-github fa-lg"/>
          <SocialButton href="https://www.linkedin.com/feed/" icono='fa-brands fa-linkedin-in fa-lg'/>
        </div>
        <p>O usa tu email para registrarte</p>    
        <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
        {alert.msg && <Alerta colorAlert={alert.color} textoAlert={alert.msg} />}
      </div>
    </>
  );
};
