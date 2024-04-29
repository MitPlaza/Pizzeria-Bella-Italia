import React, { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";

const Carrito = () => {
  const { carrito, calcularTotal, incrementar, decrementar } = useContext(
    PizzasContext
  );

  // Convertir el objeto carrito en un array de pizzas
  const carritoArray = Object.values(carrito);

  return (
    <div className="container caja">
      <div className="card">
        <div>
          <h2 className="titulocarro">Carrito de compras</h2>
          {carritoArray.map((carritoItem, index) => (
            <li className="lista" key={index}>
                <div  className="botones"><img src={carritoItem.pizza.img} width={"50px"} />
              <h3>{carritoItem.pizza.name}</h3></div>
              <div className="botones">
              <span>Cantidad: {carritoItem.cantidad}</span>
              <button
                className="btn btn-success"
                onClick={() => incrementar(carritoItem.pizza.id)}
              >
                +
              </button>
              <button
                className="btn btn-warning"
                onClick={() => decrementar(carritoItem.pizza.id)}
              >
                -
              </button>
              </div>
              <div  className="botones">
              
              <p>Precio ${carritoItem.pizza.price * carritoItem.cantidad}</p>
              </div>
              
             
            </li>
          ))}
        </div>
        <div className="totales">Total a pagar ${calcularTotal()}</div>
      </div>
    </div>
  );
};

export default Carrito;