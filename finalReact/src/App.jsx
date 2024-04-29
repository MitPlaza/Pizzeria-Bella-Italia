import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './vistas/Home'
import DetallePizzas from './vistas/DetallePizzas'
import NotFound from './vistas/NoFound'
import Carrito from './vistas/Carrito'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/detallepizza/:id' element={<DetallePizzas />}/>
      <Route path='/carrito/' element={<Carrito />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
   
    </>
  )
}

export default App
