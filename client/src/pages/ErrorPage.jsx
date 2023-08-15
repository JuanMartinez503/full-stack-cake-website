import { useLanguage } from "../utils/LanguageContext";
import {Link} from 'react-router-dom'
export default function ErrorPage(){
    const [state, dispatch] = useLanguage(); 

    return (
        <div>
              {state.language ? (
                <div>
          
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card error-card">
            <h2 className="card-header text-center">Huvo un error!</h2>
            <div className="card-body">
              <Link to='/'>Regresa a la pagina principal</Link>
            </div>
          </div>
        </div>
      </div>
    </div>


                </div>
            ):(
                <div>
                     <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card error-card">
            <h2 className="card-header text-center">There was an Error!</h2>
            <div className="card-body">
              <Link to='/'>Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
                </div>
            )}
        </div>
    )
}