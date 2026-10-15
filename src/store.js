// Redux store configuration using Redux Toolkit.
// Combines all reducers for the application. Currently only the cart reducer is needed.
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
