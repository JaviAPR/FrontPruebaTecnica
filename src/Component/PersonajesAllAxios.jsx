import { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "./UrlApi";
import CardMultiple from "./CardMultiple";
import '../estilos/estiloPersonajesAllAxios.css';



const ProductosAllAxios = () => {
  const [numberPage,setNumberPage] = useState(0);
  const URL = APIURL(`all?page=${numberPage}`);
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response);
        setData(response.data.content);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [numberPage]);


  return (
    <div className="containerPrincipal">
      <h1 className="tituloAllCards">Todos Los Productos</h1>
      <div className="contenedorCards">
        {data.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <CardMultiple title = {product.nombre} descripcion={product.descripcion} categoria={product.categoria} precio={product.precio}/>
            
          </div>
        ))}
        
      </div>
      <div>
            <h2>Paginas</h2>
            <button onClick={()=>setNumberPage(0)}>1</button>
            <button onClick={()=>setNumberPage(1)}>2</button>
        </div>

    </div>
  );
};

export default ProductosAllAxios;
