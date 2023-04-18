import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import Home from "./routes/Home"
import NovoSobrevivente from './routes/NovoSobrevivente'
import DenunciarSobrevivente from './routes/DenunciarSobrevivente'
import Negociar from './routes/Negociar'
import DetalharSobrevivente from './routes/DetalharSobrevivente'


const router = createBrowserRouter ([
  {
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/novo-sobrevivente",
        element: <NovoSobrevivente/>,
      },
      {
        path:"/denunciar-sobrevivente",
        element: <DenunciarSobrevivente/>,
      },
      {
        path:"/negociar",
        element: <Negociar/>,
      },
      {
        path:"/sobrevivente/:id",
        element: <DetalharSobrevivente/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
