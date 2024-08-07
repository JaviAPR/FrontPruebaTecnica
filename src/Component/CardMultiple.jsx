import '../estilos/estiloCardMultiple.css';
import PropTypes from 'prop-types';
const CardMultiple = ({title,descripcion,categoria,precio}) => {
    return (
        <div className="cardContainerMulti">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="heroDescription">
                <h3>Descripcion:{descripcion}</h3>
                <h3>Categoria: {categoria}</h3>
                <h3>Precio: {precio}</h3>
            </div>
        </div>
    );
}

CardMultiple.propTypes = {
    title: PropTypes.string.isRequired,
    descripcion:PropTypes.string.isRequired,
    categoria:PropTypes.string.isRequired,
    precio:PropTypes.number.isRequired
  };
 
export default CardMultiple;