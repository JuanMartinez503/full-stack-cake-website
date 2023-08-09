import './App.css'
import NavBar from './components/NavBar'
import {Outlet}from 'react-router-dom'
import BackToTopBtn from './components/BackToTopBtn'
import Footer from './components/Footer'
function App() {

  return (
    <>
  <NavBar />
  <Outlet />
  <BackToTopBtn />
  <Footer />
    </>
  )
}

export default App
