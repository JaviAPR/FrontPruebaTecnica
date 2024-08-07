import '../estilos/estiloCard.css';
import PropTypes from 'prop-types';
const Card = ({title,precio,description}) => {
    return (
        <div className="cardContainerIndividual">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="heroImg">
                <h2>{precio}</h2>
            </div>
            <div className="heroDescription">
                <p>{description}</p></div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  };
 
export default Card;