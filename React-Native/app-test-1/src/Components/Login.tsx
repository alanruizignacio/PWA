import { useEffect } from "react";
import { useReducer } from "react";

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayLoad = {
    username: string,
    nombre: string
}

type AuthAction = { type: 'logout'} | { type: 'login', payload: LoginPayLoad};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
       switch (action.type) {
           case 'logout':
               return {
                   validando: false,
                   token: null,
                   username: '',
                   nombre: ''
               }
           case 'login':
               const {nombre, username} = action.payload;
               return {
                   validando: false,
                   token: 'MITOKEN1234567890',
                   //username: action.payload.username,
                   //nombre: action.payload.nombre,
                   username,
                   nombre,
               }
           default:
               return state;
       }
}

function Login() {
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    useEffect(() => {
      setTimeout(() => {
        dispatch({ type: "logout" });
      }, 2500);
    }, []);
  
    const login = () => {
      dispatch({
          type: "login",
          payload: {
              username: "alanRuiz",
              nombre: "Ruiz"
          }
      })
    }
  
    const logout = () => {
      dispatch({
          type: "logout"
      })
    }
  
    if (state.validando) {
      return (
        <>
          <h3>Login</h3>
          <div className="AlertInfo_Div">Validando Información...</div>
        </>
      );
    }
  
    return (
      <>
        <h3>Login</h3>
        {state.token ? (
          <div className="alert alert-success">Autenticado como: {state.nombre}</div>
        ) : (
          <div className="alert alert-danger">No Autenticado...</div>
        )}
        {state.token ? (
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        ) : (
          <button className="btn btn-primary" onClick={login}>Login</button>
        )}
      </>
    );
  }
  
  export default Login;
