import { useParams } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import { PizzasContext } from "../context/PizzasContext"

const DetallePizzas = () => {
    //primero debo traer el id de la página home para renderizar la pizza
    const {id} = useParams()
    //debo traer la data del fetch desde el contexto
    const {pizzas, agregarProducto} = useContext(PizzasContext)
    //crear un estado del detalle de las pizzas
    const [pizzaDetail, setPizzaDetail] = useState({})

//una vez cargada la data debo obtener la info del id
    const getData = () => {
        const informacion = pizzas.find((pizza) => pizza.id === id)
        setPizzaDetail(informacion)
    }

    useEffect(()=>{
        getData()
    }, [])

    return(
        <>
        {pizzaDetail && (
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                        <img src={pizzaDetail.img} alt={pizzaDetail.name} width={"100%"}/>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{pizzaDetail.name}</h5>
                                
                                <p className="card-text">{pizzaDetail.desc}</p>
                                <div className="title-ingredient">
                                    <h5>Ingredientes</h5>
                                    <div>
                                    <ul>
            {pizzaDetail?.ingredients && pizzaDetail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
                                   
                                    </div>
                                </div>
                               <div className="bajada">
                               <p className="card-text precio">Precio: ${pizzaDetail.price}</p>
                                <button className="btn btn-success" onClick={()=>agregarProducto(pizzaDetail)}>Añadir al carro</button>
                               </div>
                                
                            </div>
                            <div><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        )}
   
        
        </>
    )
}

export default DetallePizzas