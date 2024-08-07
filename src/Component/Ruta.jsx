import { Routes, Route, HashRouter } from "react-router-dom";

import UsarCustomHook from "./UsarCustomHook";
import Navegar from "./Navegar";
import PersonajesAllAxios from "./PersonajesAllAxios";
import Principal from "./Principal";
import UsarCustomHookN from "./UsarBuscarNombre";



const Ruta = () => {
  return (
    <HashRouter>
      <Navegar></Navegar>
      <Routes>
      <Route path="/principal" element={<Principal/>}/>
      <Route path="/productoid" element={<UsarCustomHook />} />
      <Route path="/productoNombre" element={<UsarCustomHookN />} />
      <Route path="/productos" element={<PersonajesAllAxios/>}/>
      </Routes>
    </HashRouter>
  );
};

export default Ruta;