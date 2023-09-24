import { useState } from "react";
import Alerta from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";


export const Registro = () => {
    const [alert, setAlert] = useState({msg: '', color: ''})

    return(
       <>
            <div className="registro">
                <SocialButton
                    iconoFace = {<a href="https://www.facebook.com/home.php"><i className="fa-brands fa-facebook fa-lg"></i></a>}
                    iconoGit = {<a href="https://github.com/Nuncia"><i className="fa-brands fa-github fa-lg"></i></a>}
                    iconoLink = {<a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>}
                />
                <Formulario setAlert={setAlert}/>
                    {alert.msg && <Alerta colorAlert={alert.color} textoAlert={alert.msg}/>}
            </div>
       </> 
    );
};