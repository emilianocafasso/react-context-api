import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function ProductPage() {

    const { id } = useParams()
    console.log(id);

    const api = `https://fakestoreapi.com/products/${id}`

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(api)
            .then((res) => {
                setProduct(res.data)
                console.log(res.data);
            })
            .catch(err => console.error('Errore', err))
    }, [])

    const navigate = useNavigate()

    return (

        <div className="container">
            <img
                src={product.image}
                alt={product.title}
                className="pt-4"
                style={{ height: '400px', padding: '10px', objectFit: 'contain' }}
            />
            <h1>{product.title}</h1>
            <div>{product.description}</div>
            <div className="pt-2">
                <button className="btn btn-primary mt-2">Acquista per {product.price?.toFixed(2)}€</button>

                <button className="btn btn-secondary mt-2 mx-2" onClick={() => navigate(-1)}>Torna a tutti i prodotti</button>
            </div>
        </div>
    )

}