import { Link } from 'react-router-dom';
export default function Login (){
    return (
            <div>

    <div className="container mb-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Iniciar Sesión</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre de usuario</label>
                  <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre de usuario" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              </form>
              <p className="mt-3">¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>

            </div>
          
          )
    }
        
