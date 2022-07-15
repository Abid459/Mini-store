import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productQuantityDecrement, productQuantityIncrement, productsRemoved } from '../store/products';

let count = 0;

const Cart = () => {
    const cartProducts = useSelector((state => state.cartProducts))
    let [cartToggle, setCartToggle] = useState(false);
    console.log("toggle", cartToggle.current)

    const productsLength = cartProducts?.length;
    const dispatch = useDispatch();
    return (
        <div className='relative'>
            <div class="dropdown dropdown-end absolute right-10 top-10">
                <div className='inline-block w-7 h-7 bg-black rounded-full text-center text-white absolute border -top-4'>{productsLength}</div>
                <label tabIndex="0" class="bg-slate-500 p-3 rounded text-white m-1 cursor-pointer select-none" onClick={() => setCartToggle(!cartToggle)}>cart</label>


                <div tabindex="0" className={` ${!cartToggle ? 'hidden' : 'block'} p-2 shadow bg-base-100 rounded-box absolute right-10`}>
                    <div class="overflow-x-auto">
                        {cartProducts.length > 0 && <table table class="table w-full">


                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}


                                {
                                    cartProducts.map(cartProduct => {
                                        // count++;

                                        const { title, price, quantity, id } = cartProduct;
                                        return <tr key={id}>
                                            <th>{ }</th>
                                            <td>{title.length > 20 ? title.slice(0, 20) + "..." : title}</td>
                                            <td><div class="form-control">
                                                <label class="input-group">
                                                    <button className='btn' onClick={() => dispatch(productQuantityDecrement(cartProduct.id))}>-</button>
                                                    <div className=' bg-slate-200 text-center p-2'>{quantity}</div>
                                                    <button className='btn' onClick={() => dispatch(productQuantityIncrement(cartProduct.id))}>+</button>
                                                </label>
                                            </div></td>
                                            <td><button className='btn' onClick={() => dispatch(productsRemoved(id))}>*</button></td>
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