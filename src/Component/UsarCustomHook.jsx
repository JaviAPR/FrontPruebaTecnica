import Buscador from "./Buscador";
import Card from "./card";
import useFetch from "./useFetch";
import { useState } from "react";
const UsarCustomHook = () => {
  const [postId, setPostId] = useState(1); // Estado para almacenar el ID del post
  const { data, loading, error } = useFetch(
    `http://localhost:8081/negocio/producto/${postId}`
  );

  const handleInputChange = (event) => {
    setPostId(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Busca Los productos por su ID</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          ID:
        </span>
        <Buscador id ={postId} funcionCambio ={handleInputChange}></Buscador>
        
      </div>
      {loading && <p className="text-center">Cargando...</p>}
      {error && (
        <p className="text-center text-danger">Error: {error.message}</p>
      )}
      {data && (
        <Card title = {data.nombre} precio={data.precio} description={data.descripcion}/>
        
      )}
    </div>
  );
};

export default UsarCustomHook;
