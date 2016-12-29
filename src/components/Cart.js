import React  from 'react'
import Product from './Product'

const productList = (products) => {
    return (
        products.map(product =>
            <Product
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            />
        )
    );
};

const addSomeProduct = () => {
    return (
        <em>Please add some products to cart.</em>
    );
};

const Cart = ({ products, total, onCheckoutClicked }) => {
    const nodes = products.length > 0 ? productList(products) : addSomeProduct();

    return (
        <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <button onClick={onCheckoutClicked}
                    disabled={products.length > 0 ? '' : 'disabled'}>
                Checkout
            </button>
        </div>
    )
};

export default Cart
