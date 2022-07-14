import React from 'react';
import { useDispatch } from 'react-redux';
import { productsAdded } from '../store/products';
import store from '../store/store';

store.dispatch(productsAdded({description:'one'}))


const Home = () => {
    const dispatch  = useDispatch()
    // console.log('this is dispatch',dispatch)
    dispatch({type:'productsAdded' , description:"two"})
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button className='btn btn-xs'>ADD to cart</button>
                        <button class="btn btn-xs">Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;