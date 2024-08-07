import { Link } from "react-router-dom";
import "../estilos/estiloNavegar.css";
const Navegar = () => {
    return (
        
          <div className="navegacionWeb">
            <h3>Por favor navegue con estas opciones</h3>
            <br />
            <ul className="lista">
            <li className="nav-item active">
                <Link className="nav-link" to="/principal">
                  <b>Principal</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/productoid">
                  <b>Buscar-Producto ID</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/productoNombre">
                  <b>Buscar-Producto Nombre</b>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/productos">
                  <b>Productos</b>
                </Link>
              </li>
            </ul>
          </div>
        
      );
}
 
export default Navegar;