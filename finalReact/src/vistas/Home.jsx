import { useContext, useState } from "react"
import { PizzasContext } from "../context/PizzasContext"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const Home = () => {

    const {pizzas, agregarProducto} = useContext(PizzasContext)
    const navigate = useNavigate()

    return(
      
       <div className="container">

        <div className="row">
            <div className="banner">
                <div><h2>Pizzería Bella Italia</h2></div>
                <div><h4>Las mejores pizzas de la costa amalfitana</h4></div>
        
            </div>
     
        </div>
        <div className="row pizzasCard">
            {pizzas && pizzas.map( (pizza) => (

            <div key={pizza.id} className="col-md-4">
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
       
        <Card.Text>
       Ingredientes:
        {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        
        </Card.Text>
        <Card.Text className="precio">
        ${pizza.price}
        </Card.Text>
        <div className="botones">
        <Button onClick={() => navigate(`/detallepizza/${pizza.id}`)} variant="primary">Ver Detalle</Button>
        <Button variant="danger" onClick={()=>agregarProducto(pizza)}>Añadir al carro</Button>
        </div>
      </Card.Body>
    </Card>

</div>
                

            ))}
        </div>

       </div>
    )
}
export default Home