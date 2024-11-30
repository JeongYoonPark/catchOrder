import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/user'
import cartSlice from "./slice/cart";

const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        cart: cartSlice.reducer,
    },
});
export const userActions = userSlice.actions;
export const cartActions = cartSlice.actions;
export default store;