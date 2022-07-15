import React from 'react';
import { useDispatch } from 'react-redux';
import { productsAddedtoCart } from '../store/products';

const Products = ({ products }) => {
    
    const dispatch = useDispatch()
    return (
        <div className='flex flex-wrap justify-center mt-10 gap-1 w-ful bg-slate-300'>
            {
                products.map(product => {
                    const {title,price,image,id} = product;
                    return <div key={id}>
                        <div class=" w-52 h-80 bg-base-100 shadow-xl">
                            <div className='flex justify-center'>
                            <figure className=''><img className='px-10 py-3 w-40 h-40 object-contain' src={image} alt="Shoes" /></figure>
                            </div>
                            <div class=" p-5">
                                <h2 class="">{title.length>20?title.slice(0,20):title}</h2>
                                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                <div class="card-actions justify-end mt-3">
                                    <button className='btn btn-xs' onClick={() => dispatch(productsAddedtoCart(product))}>ADD to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Products;