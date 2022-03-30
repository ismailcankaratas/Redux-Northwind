// REDUCER STATE YÖNETİMİNİ YAPTIĞIMIZ YERDİR.
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c => c.product.id === action.payload.product.id);
            if (addedItem) {
                var addState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 });
                    }
                    return cartItem;
                });
                return addState;
            } else {
                return [...state, { ...action.payload }]
            }
        case actionTypes.REMOVE_FROM_CART:
            const removeState = state.filter(cartItem => cartItem.product.id !== action.payload.id);
            return removeState;
        default:
            return state;
    }
}

