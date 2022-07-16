import React from 'react';
import Cart from './Cart';
import Home from './Home';

const Header = () => {
    return (
        <div className='bg-stone-200'>

            <h2 style={{ 'fontFamily': 'Poiret One' }} className='text-center py-10 text-4xl '>SIMPLE <span className='text-sky-700 ' > STORE</span></h2>
            <Cart></Cart>
            <Home></Home>
        </div>
    );
};

export default Header;