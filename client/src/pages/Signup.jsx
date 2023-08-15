import React, { useState } from 'react';
import { createUser } from '../utils/API';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useLanguage } from '../utils/LanguageContext';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch] = useLanguage(); 


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
        const { user, token } = await response.json();
        Auth.login(token);
        console.log(user);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Set error message from the server response
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage('An error occurred. Please try again.'); // Set a generic error message
    }
  };

  return (
    <div>
          {state.language ? (
                <div>
                     <div className="container mb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card signup-form">
              <div className="card-header">Registrarse</div>
              <div className="card-body">
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
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
                  ¿Ya tienes cuenta? <Link to="/login">Inicia aquí</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
                </div>
            ):(
                <div>
                    <div className="container mb-5">
  <div className="row justify-content-center mt-5">
    <div className="col-md-6">
      <div className="card signup-form">
        <div className="card-header">Sign Up</div>
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn login-btn btn-primary">
              Sign Up
            </button>
          </form>
          <p className="mt-3">
            Already have an account? <Link to="/login">Log In here</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

                </div>
            )}
     
    </div>
  );
}
