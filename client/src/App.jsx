import './App.css'
import NavBar from './components/NavBar'
import {Outlet}from 'react-router-dom'
import BackToTopBtn from './components/BackToTopBtn'
function App() {

  return (
    <>
  <NavBar />
  <Outlet />
  <BackToTopBtn />
    </>
  )
}

export default App
