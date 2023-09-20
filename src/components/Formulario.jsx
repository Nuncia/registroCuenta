import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
    const [nombre,setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('')
    const [confirmacion, setConfirmacion] = useState('');
    const [error, setError] = useState(false)
    const confirmarFormatoCorreo = (correo) =>{
        const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return expresionRegular.test(correo);
    }

    const validarFormulario = (e) => {
        e.preventeDefault();
        console.log(contrasenia)
        if(nombre === '' || correo === '' || contrasenia === '' || confirmacion === ''){
            setError(true)
            return
        } else{
            if(confirmarFormatoCorreo()){
                if(contrasenia === confirmacion){
                    alert('Su usuario ha sido registrado.')
                }
            } else{
                alert('Formato correo incorrecto.')
            }
        }
    }
    return (
        <>            
            <form className="df ">
                <div className="form-group formulario">
                    <input id='nombre' className="form-control mt-3" type="text" placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <input id='correo' className="form-control" type="email" placeholder='tuemail@ejemplo.com' value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                    <br />
                    <InputGroup className="mb-3">
        {/* <InputGroup.Text id="inputGroup-sizing-default">
          Contraseña
        </InputGroup.Text> */}
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Contraseña'
          onChange={(e) => setContrasenia(e.target.value)}
        />
      </InputGroup>
                </div>{error}
                <Button type='submit' onSubmit={validarFormulario} className='button textColor'>Registrarse</Button>
            </form>
        </>
    );
};

// Formulario.propTypes = {
//     nombreFormulario: PropTypes.string.isRequired
// }

export default Formulario;