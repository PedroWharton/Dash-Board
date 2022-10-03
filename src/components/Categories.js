import React, { useState, useEffect } from 'react'
import '../assets/css/categories.css'

export default function Categories() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data.products)
            console.log(data.data.products);
        })
    }, [])

    const [categories, setCategories] = useState([]);
    const fetchURL = 'http://localhost:3000/api/categories';

    useEffect(() => {
        fetch(fetchURL)
        .then(response => response.json())
        .then(data => {
            setCategories(data.rows)
        })
    }, [])
  return (
    <div className='categories'>
        {categories.map((c => {
        return <div className='category'>
            <h1>{c.name}</h1>
            {products.map((product => {
                if(product.categories[0] == c.name){
                    return <article className="producto">
                <a href="#">
                    <img src={'http://' + product.image} alt=""/>
                    <p className="precio">{product.price}</p>
                    <h4 className="titulo-producto-promociones">{product.name}</h4>
                </a>    
                </article>
                }
                }))}
            </div>
    }))}
    </div>
  )
}
