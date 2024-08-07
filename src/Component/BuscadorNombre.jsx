import PropTypes from 'prop-types';

const Buscador = ({ value, onChange }) => {
  return (
    <input
      type="text" // Cambiado a text para buscar por nombre
      className="form-control"
      placeholder="Digite Nombre"
      aria-label="Nombre"
      aria-describedby="basic-addon1"
      value={value}
      onChange={onChange}
    />
  );
};

Buscador.propTypes = {
  value: PropTypes.string.isRequired, // Cambiado de id a value
  onChange: PropTypes.func.isRequired, // Cambiado de funcionCambio a onChange
};

export default Buscador;
