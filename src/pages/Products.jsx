import axios from "axios"
import { useState, useEffect, useEffectEvent } from "react"
import { Link } from "react-router-dom"

export default function Prodotti() {
    const api = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(api)
            .then((res) => {
                setProducts(res.data)
                console.log(res.data);
            })
            .catch(err => console.error('Errore', err))
    }, [])


    return (
        <div className="container">
            <h1 className="my-4">Prodotti</h1>
            <div className="row">
                {products.map(product => (

                    <div key={product.id} className="col-3 mb-4">
                        <Link to={`/prodotti/${product.id}`} className="card text-decoration-none" style={{ minHeight: '350px' }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="card-img-top pt-4"
                                style={{ height: '200px', padding: '10px', objectFit: 'contain' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                            </div>
                        </Link>
                    </div>

                ))}
            </div>
        </div >
    )
}