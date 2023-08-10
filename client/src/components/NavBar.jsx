import { Link, useLocation } from "react-router-dom";
import Auth from '../utils/auth'
import { Button } from "bootstrap";
export default function NavBar() {
  const currentURL = useLocation().pathname;

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
      <div className="d-flex justify-content-end p-2">
            {Auth.loggedIn() ? (
                <div>
                    <button className="btn logout-btn">Logout</button>
                </div>
            ):(
                <div>
                    <button className="btn login-btn"><Link className="login-a" to='/login'>Login</Link></button>
                </div>
            )}
      </div>
    </header>
  );
}
