import { useState } from "react";
import Alerta from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";


export const Registro = () => {
    const [error, setError] = useState(false)
    const [datoRecibido, setDatoRecibido] = useState('');

    const recibirDatosdelHijo = (claseColor) => {
        if(setDatoRecibido(claseColor) == 'danger'){
            setError(false);
    
        } else{
            setError(true);
            return
        }
    }

    return(
       <>
            <div className="registro">{datoRecibido}
                <SocialButton
                    iconoFace = {<a href="https://www.facebook.com/home.php"><i className="fa-brands fa-facebook fa-lg"></i></a>}
                    iconoGit = {<a href="https://github.com/Nuncia"><i className="fa-brands fa-github fa-lg"></i></a>}
                    iconoLink = {<a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>}
                />
                <Formulario onDatosGenerados= {recibirDatosdelHijo}/>
                {error ? <Alerta colorAlert= {datoRecibido}  textoAlert='Usuario ha sido registrado!'/> : null}
            </div>
       </> 
    );
};