import principalImg from "../img/imagenPrincipal.png"
import '../estilos/estiloPrincipal.css';
const Principal = () => {
    return ( <>
        <div className="contenedorPrincipalApp">
            <div className="titulosApp">
                <h1>Prueba Tecnica Macondo Magic Software</h1>
            </div>
            <div className="imagenApp">
                <img src={principalImg} alt="Imagen dragon ball z" />
            </div>
            <div className="footerApp">
                <p>Por favor navegue en las diferentes opciones que se muestran arriba</p>
            </div>
        </div>
        
    </> );
}
 
export default Principal;