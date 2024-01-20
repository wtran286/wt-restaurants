import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
  },
  reducers: {
    addItem: (state, action) => {
        const cartKeys = Object.keys(state.cart);
        const actionKeys = Object.keys(action.payload);
        if (cartKeys.includes(actionKeys[0])) {
            state.cart[actionKeys[0]].push(action.payload[actionKeys[0]][0])
        }
        else {
            state.cart = { ...action.payload };
        }
    },
    removeItem: (state, action) => {
        const idx = state.cart[action.payload.storeId].findIndex((store) => store.uniqueId === action.payload.uniqueId);
        state.cart[action.payload.storeId].splice(idx, 1);
    },
    clearCart: (state) => {
      state.cart = {};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCart = state => state.cart.cart;

export default cartSlice.reducer;
