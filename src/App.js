import React from 'react';
import ProductsContainer from './container/ProductsContainer';
import CartContainer from './container/CartContainer';

const App = () => (
    <div>
        <h2>Shopping Cart</h2>
        <hr/>
        <ProductsContainer />
        <hr/>
        <CartContainer />
    </div>
);

export default App;