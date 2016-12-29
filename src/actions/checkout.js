import shop from '../api/shop'
import types from './actionType';

const requestCheckout = () => {
    return {
        type: types.CHECKOUT_REQUEST
    };
};

const successCheckout = cart => {
    return {
        type: types.CHECKOUT_SUCCESS,
        cart
    };
};

const checkout = products => (dispatch, getState) => {
    const { cart } = getState();
    dispatch(requestCheckout());
    shop.buyProducts(products, () => {
        dispatch(successCheckout(cart));
    });
};

export default checkout;