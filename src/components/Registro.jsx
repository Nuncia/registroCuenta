import Formulario from "./Formulario";
import Alerta from "./Alert";
import SocialButton from "./SocialButton";
import { useState } from "react";


export const Registro = () => {
    const [error, setError] = useState(false)
    const [hijoPadre, setHijoPadre] = useState(false);

    const datosHijo = ()  => {

    }
    return(
       <>
            <div className="registro">
                <SocialButton
                    iconoFace = {<a href="https://www.facebook.com/home.php"><i className="fa-brands fa-facebook fa-lg"></i></a>}
                    iconoGit = {<a href="https://github.com/Nuncia"><i className="fa-brands fa-github fa-lg"></i></a>}
                    iconoLink = {<a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>}
                />
                <Formulario datosHijo={datosHijo}/>
                {error ? <Alerta colorAlert= 'red'  textoAlert='Faltan campos por completar!'/> : <Alerta colorAlert= 'green'  textoAlert='Usuario ha sido registrado!'/>}
            </div>
       </> 
    );
};