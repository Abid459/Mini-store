import React from 'react';
import { useDispatch } from 'react-redux';
import { productsAddedtoCart } from '../store/products';

const Products = ({ products }) => {

    const dispatch = useDispatch()
    return (
        <div className='flex flex-wrap justify-center mt-10 gap-1 w-ful '>
            {
                products.map(product => {
                    const { title, price, image, id } = product;
                    return <div key={id} className='z-10'>
                        <div className=" w-52  bg-base-100 shadow-xl">
                            <div className='flex justify-center h-40'>
                                <figure className=''><img className='px-10 py-3 w-40 h-40 object-contain' src={image} alt="Shoes" /></figure>
                            </div>
                            <div className=" p-5 relative h-40">
                                <h2 className="font-semibold">{title.length > 20 ? title.slice(0, 20) : title}</h2>
                            <p>Price: ${price}</p>

                                <button className='btn btn-sm border-0 bg-sky-900 hover:bg-sky-800  absolute bottom-3 right-3' onClick={() => dispatch(productsAddedtoCart(product))}>ADD to cart</button>

                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Products;