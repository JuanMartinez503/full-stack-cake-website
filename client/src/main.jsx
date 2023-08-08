import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "aos/dist/aos.css";
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import TresLeches from './pages/TresLeches.jsx'
import CupCake from './pages/CupCake.jsx'
import Pasteles from './pages/Pasteles.jsx'
import ChocoFlan from './pages/ChocoFlan.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element:<Home />
      },
      {
        path:'/tresleches/:pageNumber',
        element:<TresLeches />
      },
      {
        path:'/cupcakes/:pageNumber',
        element:<CupCake />
      },
      {
        path:'/pasteles/:pageNumber',
        element: <Pasteles />
      },
      {
        path:'/chocoflan/:pageNumber',
        element: <ChocoFlan />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
