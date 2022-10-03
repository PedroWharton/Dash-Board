import React, { useState, useEffect} from 'react'
import '../assets/css/products.css'

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data.products)
        })
    }, [])

  return (
    <div className="rueda-productos">
        {products.map((product => {
            return <article className="producto">
            <a href="/products/productDetail/<%= product.product_id %>">
                <img src={'http://' + product.image} alt=""/>
                <p className="precio">{product.price}</p>
                <h4 className="titulo-producto-promociones">{product.name}</h4>
            </a>    
        </article>
        }))}
    </div>
  )
}
