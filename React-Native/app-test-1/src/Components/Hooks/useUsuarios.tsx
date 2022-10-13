import { useEffect, useRef, useState } from "react";
import { reqRespUsuarioListado } from "../../interfaces/reqResp";
import { Usuario } from "../../interfaces/reqResp";
import { reqRespApi } from "../../Api/reqRes";


//funciones
const ficFnPaginaSiguiente = ()  => {
}
const ficFnPaginaAnterior = () => {
}

function useUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const refPage = useRef(0);
    
    useEffect(() => {
      cargarUsuarios();
    }, []);
    
    const cargarUsuarios = async () => {
      await reqRespApi
        .get<reqRespUsuarioListado>("/users", {
          params: {
            page: refPage.current,
          },
        })
        .then((resp) => {
          if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
          } else {
            alert("No hay mas registros");
          }
        })
        .catch((err) => console.log(err));
    };

    const paginaSiguiente = () => {
      refPage.current ++;
      cargarUsuarios();
    }

    const paginaAnterior = () => {
      if ( refPage.current > 1 ){
        refPage.current --;
        cargarUsuarios();
    } 
    }

    return {
        usuarios,
        //para no exponer la funcion
        //ficFnCargaUsuarios
        paginaSiguiente,
        paginaAnterior
    }
}

export default useUsuarios