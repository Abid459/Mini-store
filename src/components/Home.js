import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, allProductsAdded, productsAdded, productsAddedtoCart } from '../store/products';
import store from '../store/store';



// store.dispatch(productsAdded({description:'one'}))
const Home = () => {
    const dispatch  = useDispatch()
    // dispatch({type:'productsAdded' , description:"two"})
    const products = useSelector((state) => state.allProducts)
    console.log("this is our products", products)

    
    useEffect(()=>{
        const  fetchProducts= async() =>{
            const data =await axios('https://fakestoreapi.com/products')
            console.log("this is products",data.data)
            dispatch(allProductsAdded(data.data))
        }
        fetchProducts()
    },[])
    // console.log('this is dispatch',dispatch)
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button className='btn btn-xs' onClick={()=>dispatch(productsAddedtoCart({description:'one'}))}>ADD to cart</button>
                        <button class="btn btn-xs">Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;