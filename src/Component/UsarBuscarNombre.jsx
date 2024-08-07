import Buscador from "./BuscadorNombre";
import Card from "./card";
import useFetch from "./useFetchNombre";
import { useState } from "react";

const UsarCustomHookN = () => {
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre del producto
  const { data, loading, error } = useFetch(
    `http://localhost:8081/negocio/search/${nombre}`
  );

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Busca Los productos por su Nombre</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Nombre:
        </span>
        <Buscador
          value={nombre} // Cambiado de id a value
          onChange={handleInputChange} // Cambiado de funcionCambio a onChange
        />
      </div>
      {loading && <p className="text-center">Cargando...</p>}
      {error && (
        <p className="text-center text-danger">Error: {error.message}</p>
      )}
      {data && data.content && data.content.length > 0 && (
        data.content.map(product => (
          <Card
            key={product.id}
            title={product.nombre}
            precio={product.precio}
            description={product.descripcion}
          />
        ))
      )}
    </div>
  );
};

export default UsarCustomHookN;
