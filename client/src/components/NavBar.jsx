import { Link, useLocation } from "react-router-dom";
import Auth from '../utils/auth'
export default function NavBar() {
  const currentURL = useLocation().pathname;
  const handleLogout = ()=>{
    Auth.logout()
  }

  return (
    <header>
      <nav className="d-flex">
        <div className="web-name">
          <Link 
           className={
            currentURL === "/" ? "nav-link active" : "nav-link"
          }to="/">Martinez Cakes</Link>
        </div>
        <ul className="ms-auto">
          <li>
            {" "}
            <Link
              className={
                currentURL === "/tresleches/1" ? "nav-link active" : "nav-link"
              }
              to="/tresleches/1"
            >
              Tres Leches
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={
                currentURL === "/chocoflan/2" ? "nav-link active" : "nav-link"
              }
              to="/chocoflan/2"
            >
              Choco Flan
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={
                currentURL === "/cupcakes/3" ? "nav-link active" : "nav-link"
              }
              to="/cupcakes/3"
            >
              Cup Cakes
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={
                currentURL === "/pasteles/4" ? "nav-link active" : "nav-link"
              }
              to="/pasteles/4"
            >
              Pasteles
            </Link>
          </li>
        </ul>
      </nav>
      <div className=" p-1">
            {Auth.loggedIn() ? (
                <div className=" greeting-cont">
                    <h2 className="greeting-message">Hola, {Auth.getProfile().data.username}!</h2>
                    <button className=" btn btn-danger logout-btn" onClick={handleLogout}>Logout!</button>
                
                </div>
            ):(
                <div className="text-center">
                    <button className="btn login-btn"><Link className="login-a" to='/login'>Login</Link></button>
                </div>
            )}
      </div>
    </header>
  );
}
