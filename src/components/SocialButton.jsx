import PropTypes from 'prop-types';

const SocialButton = ({icono, href}) => {
    return(
        <>
            <div className="icono">
                <a href={href}><i className={icono}></i></a> 
            </div>
        </>
    );
};

export default SocialButton;