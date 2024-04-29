import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({children}) => {

    const [pizzas, setPizzas] = useState([])
    const [carrito, setCarrito] = useState([])
    const [cantidadPizzas, setCantidadPizzas] = useState(0);



    const getData = async() => {
        try {
            const response = await fetch("/pizzas.json");
            const pizzas = await response.json();
            setPizzas(pizzas); // Aquí se establece el estado con los datos obtenidos
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

  
    const agregarProducto = (pizza) => {
        const updatedCarrito = { ...carrito };
        const pizzaId = pizza.id;
        if (updatedCarrito[pizzaId]) {
          updatedCarrito[pizzaId].cantidad++;
        } else {
          updatedCarrito[pizzaId] = { pizza: pizza, cantidad: 1 };
        }
        setCarrito(updatedCarrito);
        setCantidadPizzas(cantidadPizzas + 1);
      };

        

      const calcularTotal = () => {
        let total = 0;
        for (const pizzaId in carrito) {
          total += carrito[pizzaId].pizza.price * carrito[pizzaId].cantidad;
        }
        return total;
      };

      const incrementar = (pizzaId) => {
        const updatedCarrito = { ...carrito };
        updatedCarrito[pizzaId].cantidad++;
        setCarrito(updatedCarrito);
        setCantidadPizzas(cantidadPizzas + 1);
      };
    
      const decrementar = (pizzaId) => {
        const newCarrito = { ...carrito };
        if (newCarrito[pizzaId].cantidad > 1) {
          newCarrito[pizzaId].cantidad--;
        } else {
          delete newCarrito[pizzaId];
        }
        setCarrito(newCarrito);
      };

    useEffect(() => {
        getData()
    }, [])

    return(

        <PizzasContext.Provider value={{pizzas, carrito, agregarProducto, calcularTotal, incrementar, decrementar, cantidadPizzas}}>
            {children}
        </PizzasContext.Provider>

    )



}

export default PizzasProvider