import { combineReducers } from 'redux';
import types from '../actions/actionType';

const products = (state, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory - 1
            };
        default:
            return state;
    }
};

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj
                }, {})
            };
        default:
            const { productId } = action;
            if (productId) {
                return {
                    ...state,
                    [productId]: products(state[productId], action)
                }
            }
            return state
    }
};

const visibleIds = (state = [], action) => {
    switch (action.type) {
        case types.RECEIVE_PRODUCTS:
            return action.products.map(product => product.id);
        default:
            return state
    }
};

export const getProduct = (state, id) =>
    state.byId[id];

export const getVisibleProducts = state =>
    state.visibleIds.map(id => getProduct(state, id));

export default combineReducers({
    byId,
    visibleIds
});
