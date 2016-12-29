import shop from '../api/shop'
import types from './actionType';

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
});

const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
};

export default getAllProducts;
