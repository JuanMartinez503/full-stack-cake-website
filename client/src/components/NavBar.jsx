import { Link, useLocation } from "react-router-dom";
import Auth from "../utils/auth";
import { useLanguage } from "../utils/LanguageContext";
import { TOGGLE_LANGUAGE } from "../utils/actions";
export default function NavBar() {
  const currentURL = useLocation().pathname;
  const [state, dispatch]= useLanguage()
  console.log(state.language);
  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <div>
      <header>
        <nav className="d-flex">
          <div className="web-name">
            <Link
              className={currentURL === "/" ? "nav-link" : "nav-link"}
              to="/"
            >
              <img src="/martinezcakeslogo.png" id='logo' alt="logo for martinez cakes" />
            </Link>
          </div>
          <ul className="ms-auto">
            <li>
              {" "}
              <Link
                className={
                  currentURL === "/tresleches/1"
                    ? "nav-link active"
                    : "nav-link"
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
                Cupcakes
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
          {state.language?'Pasteles':'Cakes'}
                
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" p-1">
          {Auth.loggedIn() ? (
            <div className=" greeting-cont">
              <h2 className="greeting-message">
          {state.language?( <div>Hola, {Auth.getProfile().data.username}!</div>):( <div>Welcome, {Auth.getProfile().data.username}!</div>)}

            
              </h2>
              <button
                className=" btn btn-danger logout-btn"
                onClick={handleLogout}
              >
                Logout!
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button className="btn login-btn">
                <Link className="login-a" to="/login">
                  Login
                </Link>
              </button>
            </div>
          )}
        </div>
      </header>
      <div>
        <button className="btn-warning btn mx-2 my-2"
          onClick={() =>
            dispatch({ type: TOGGLE_LANGUAGE, payload: state.language })
          }
        >
          {state.language?'English':'Espańol'}
        </button>
      </div>
    </div>
  );
}
