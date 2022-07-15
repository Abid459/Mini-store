import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, allProductsAdded, productsAdded, productsAddedtoCart } from '../store/products';
import store from '../store/store';
import Products from './Products';



// store.dispatch(productsAdded({description:'one'}))
const Home = () => {
    const dispatch  = useDispatch()
    // dispatch({type:'productsAdded' , description:"two"})
    const products = useSelector((state) => state.allProducts)
    console.log("this is our products", products)

    
    useEffect(()=>{
         (async() =>{
            const data =await axios('https://fakestoreapi.com/products')
            console.log("this is products",data.data)
            dispatch(allProductsAdded(data.data))
        })();
        
    },[])
    // console.log('this is dispatch',dispatch)
    return (
        <div className='p-10 bg-black pt-20'>
            <Products products={products}></Products>
        </div>
    );
};

export default Home;