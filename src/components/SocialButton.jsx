import PropTypes from 'prop-types';

const SocialButton = ({iconoFace, iconoGit, iconoLink}) => {
    return(
        <>
            <div className="socialButton">
                <h3 className="tituloSocialButton">Crea una cuenta</h3>
                <div className="conteinerSocialButton">
                    <div className="icono">
                        {iconoFace}  
                    </div>
                    <div className="icono">
                        {iconoGit}
                    </div>
                    <div className="icono">
                        {iconoLink}
                    </div>
                </div>
                <p>O usa tu email para registrarte</p>
            </div>
        </>
    );
};

SocialButton.propTypes = {
    iconoFace: PropTypes.string.isRequired,
    iconoGit: PropTypes.string.isRequired,
    iconoLink: PropTypes.string.isRequired
}

export default SocialButton;