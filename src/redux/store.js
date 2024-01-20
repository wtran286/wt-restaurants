import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import locationReducer from './slices/locationSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    location: locationReducer
  },
});
