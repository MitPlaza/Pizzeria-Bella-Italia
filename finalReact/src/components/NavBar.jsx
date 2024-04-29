import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { PizzasContext } from "../context/PizzasContext"

const NavBar = () =>{
    const {calcularTotal} = useContext(PizzasContext)
  return (
    <Navbar className='navbar-home' bg="primary"  sticky="top" data-bs-theme="dark">
      <Container>
      <Link to="/">Pizzería Bella Italia</Link>
      <Link to="/carrito">Ver Carrito</Link>
      
       <div className='total'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> ${calcularTotal()}</div>
         
      </Container>
    </Navbar>
  );
}

export default NavBar;