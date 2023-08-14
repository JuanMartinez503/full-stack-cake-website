
import { useState } from 'react';
import { createUser } from '../utils/API';
import {Link} from 'react-router-dom'
import Auth from '../utils/auth';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    try {
      const response = await createUser(user);

      if (response.ok) {
        console.log('User created successfully');
        // You can add further logic here, such as redirecting to a different page after successful sign-up.
        const {user, token}= await response.json()
        Auth.login(token)
        console.log(user);
      } else {
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };



  return (
    <div >
      <div className="container mb-5 ">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card signup-form">
              <div className="card-header">Registrarse</div>
              <div className="card-body">
                <form onSubmit={handleSubmit} >
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Ingrese su nombre de usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Ingrese su correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn login-btn btn-primary">
                    Registrarse
                  </button>
                </form>
                <p className="mt-3">
                  ¿Ya tienes cuenta?{" "}
                  <Link to="/login">Inicia aqui</Link>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
