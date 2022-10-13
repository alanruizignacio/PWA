
import { Usuario } from "../interfaces/reqResp";
import useUsuarios from "./Hooks/useUsuarios";

function Usuarios() {
const { usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          ></img>
        </td>
        <td>
          {usuario.first_name} {usuario.last_name}
        </td>
        <td>{usuario.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <tbody>
          {usuarios.map((FicArgUsuario) => renderItem(FicArgUsuario))}
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        //onClick= { ficFnCargaUsuarios }
        onClick= { paginaAnterior }
        >
        Anterior       
        </button>
        &nbsp;           
        <button
        className="btn btn-primary"
        //onClick= { ficFnCargaUsuarios }
        onClick= { paginaSiguiente }
        >
        Siguiente       
        </button>
    </>
  );
}