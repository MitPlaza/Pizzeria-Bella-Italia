import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom"
import PizzasProvider from './context/PizzasContext.jsx'
import NavBar from './components/NavBar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PizzasProvider>
    <NavBar/>
    <App />
    </PizzasProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
