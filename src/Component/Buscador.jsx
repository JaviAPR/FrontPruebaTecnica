import PropTypes from 'prop-types';
const Buscador = ({ id, funcionCambio }) => {
    return (
      <>
        <input
          type="number"
          className="form-control"
          placeholder="Digite ID"
          aria-label="ID"
          aria-describedby="basic-addon1"
          value={id}
          onChange={funcionCambio}
        />
      </>
    );
  };

  Buscador.propTypes = {
    id: PropTypes.number.isRequired,
    funcionCambio: PropTypes.func.isRequired,
  };
  
  export default Buscador;