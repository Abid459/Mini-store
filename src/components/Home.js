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


    
    useEffect(()=>{
         (async() =>{
            const data =await axios('./products.json')
            dispatch(allProductsAdded(data.data))
        })();
        
    },[])

    return (
        <div className='px-10'>
            <Products products={products}></Products>
        </div>
    );
};

export default Home;