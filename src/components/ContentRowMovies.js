import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';
import axios from 'axios';

const productsUrl='http://localhost:3000/api/products'
const usersUrl='http://localhost:3000/api/users'
const categoriesUrl='http://localhost:3000/api/categories'

function ContentRowMovies(){

    const [users, setUsers] = useState(null);
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(usersUrl);
            setUsers(request.data.data.count)
            return
        }
        fetchData()

    }, [usersUrl])
    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(productsUrl);
            setProducts(request.data.data.count)
            return
        }
        fetchData()

    }, [productsUrl])
    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(categoriesUrl);
            setCategories(request.data.count)
            return
        }
        fetchData()

    }, [categoriesUrl])

    let UsersInDB = {
        title: 'Users in DataBase',
        color: 'primary', 
        cuantity: users,
        icon: 'fa-clipboard-list'
    }

    let ProductsInDB = {
        title:'Total Products', 
        color:'success', 
        cuantity: products,
        icon:'fa-award'
    }

    let CategoriesInDB = {
        title:'Number of Categories' ,
        color:'warning',
        cuantity: categories,
        icon:'fa-user-check'
    }

    let cartProps = [UsersInDB, ProductsInDB, CategoriesInDB];

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;