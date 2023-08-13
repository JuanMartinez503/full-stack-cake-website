import { Link } from "react-router-dom";
import { login } from "../utils/API";
import { useState } from "react";
import Auth from '../utils/auth'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    try {
        const response = await login(user)
        if (response.ok){
            console.log('success');
            const {user, token}= await response.json()
            Auth.login(token)
            console.log(user);
        } else {
            console.log('there was an error login in!');
        }
    } catch (err) {
        console.log(err);
    }
  };
  return (
    <div>
      <div className="container mb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Iniciar Sesión</div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                      id="username"
                      placeholder="Ingrese su nombre de usuario"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      className="form-control"
                      id="password"
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                  </button>
                </form>
                <p className="mt-3">
                  ¿No tienes una cuenta?{" "}
                  <Link to="/signup">Regístrate aquí</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
