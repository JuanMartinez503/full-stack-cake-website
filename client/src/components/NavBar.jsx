import {Link , useLocation} from 'react-router-dom'

export default function NavBar (){
  const currentURL = useLocation().pathname;

    return(
        <header>
            <nav className='d-flex'>
                <div className="web-name"><Link to='/'>Martinez Cakes</Link></div>
                <ul className='ms-auto'>
                    <li> <Link to='/tresleches/1'>Tres Leches</Link></li>
                    <li> <Link to='/chocoflan/2'>Choco Flan</Link></li>
                    <li> <Link to='/cupcakes/3'>Cup Cakes</Link></li>
                    <li> <Link to='/pasteles/4'>Pasteles</Link></li>
                </ul>
            </nav>
        </header>
    )
}