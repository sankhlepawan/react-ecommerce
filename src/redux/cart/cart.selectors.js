import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCart],
    (cart) => cart.cartItems.reduce((accumQwt, cartItem) => accumQwt + cartItem.quantity,0)
)