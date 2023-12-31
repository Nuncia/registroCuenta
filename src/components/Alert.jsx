import Alert from 'react-bootstrap/Alert';

const Alerta = ({colorAlert, textoAlert}) => {
    return(
        <>
          <div className={`alert alert-${colorAlert}`}>
            <p>{textoAlert}</p>
          </div>
        </>
    );
};

export default Alerta;