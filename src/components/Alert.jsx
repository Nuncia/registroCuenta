import PropTypes from 'prop-types';

const Alerta = ({colorAlert, textoAlert}) => {
    return(
        <>
          <div className={`alert ${colorAlert}`}>
            <p>{textoAlert}</p>
          </div>
        </>
    );
};

Alerta.propTypes = {
  colorAlert: PropTypes.string.isRequired,
  textoAlert: PropTypes.string
}

export default Alerta;

