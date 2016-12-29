import types from './actionType';

const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
});

const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
};

export default addToCart;