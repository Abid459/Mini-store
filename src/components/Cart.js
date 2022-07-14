import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const products = useSelector((state => state.cartProducts))
    const productsLength = products.length;
    const dispatch = useDispatch();
    return (
        <div className='relative'>
            <div class="dropdown dropdown-end absolute right-10 top-10">
                <div className='inline-block w-7 h-7 bg-black rounded-full text-center text-white absolute border -top-4'>{productsLength}</div>
                <label tabindex="0" class="bg-slate-500 p-3 rounded text-white m-1 cursor-pointer">cart</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>

    );
};

export default Cart;