import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productQuantityDecrement, productQuantityIncrement, productsRemoved } from '../store/products';

let count = 0;

const Cart = () => {
    const cartProducts = useSelector((state => state.cartProducts))
    let [cartToggle, setCartToggle] = useState(false);

    const productsLength = cartProducts?.length;
    const dispatch = useDispatch();
    return (
        <div className=''>
            <div className="dropdown dropdown-end absolute right-10 top-10">
                <div className='inline-block w-7 h-7 bg-slate-400 rounded-full text-center text-white absolute border -top-6'>{productsLength}</div>
                <label tabIndex="0" className="bg-sky-800 p-3 rounded text-white m-1 cursor-pointer select-none" onClick={() => setCartToggle(!cartToggle)}>cart</label>


                <div tabIndex="0" className={` ${!cartToggle ? 'hidden' : 'block'} p-2 shadow bg-base-100 rounded-box absolute right-10 z-40`}>
                    <div className="overflow-x-auto ">
                        {cartProducts.length > 0 && <table table className="table w-full z-40">


                            {/* <!-- head --> */}
                            <thead >
                                <tr >
                                    
                                    <th className='bg-sky-800 text-white'>IMAGE</th>
                                    <th className='bg-sky-800 text-white'>Description</th>
                                    <th className='bg-sky-800 text-white'>Quantity</th>
                                    <th className='bg-sky-800 text-white'>Remove</th>
                                    <th className='bg-sky-800 text-white'>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}


                                {
                                    cartProducts.map(cartProduct => {
                                        // count++;

                                        const { title, price, quantity, id ,image} = cartProduct;
                                        return <tr key={id} className='z-40'>
                                            <td className='z-40'><img className='p-1' src={image} alt="" />
                                             
                                                </td>
                                            <td>{title.length > 20 ? title.slice(0, 20) + "..." : title}</td>
                                            <td><div className="form-control">
                                                <label className="input-group">
                                                    <button className='btn border-0 bg-sky-800 hover:bg-sky-800' onClick={() => dispatch(productQuantityDecrement(cartProduct.id))}>-</button>
                                                    <div className=' bg-slate-200 text-center p-2'>{quantity}</div>
                                                    <button className='btn bg-sky-900 border-0 hover:bg-sky-800' onClick={() => dispatch(productQuantityIncrement(cartProduct.id))}>+</button>
                                                </label>
                                            </div></td>
                                            <td><button className='btn border-0 bg-slate-400 hover:bg-sky-800' onClick={() => dispatch(productsRemoved(id))}>X</button></td>
                                            <td>{(price*quantity).toFixed(2)}</td>
                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>}
                        {cartProducts.length === 0 && <h3 className='p-3 whitespace-nowrap'>No Products added</h3>}
                    </div>
                </div>
                <div >
                </div>
            </div>
        </div>

    );
};

export default Cart;