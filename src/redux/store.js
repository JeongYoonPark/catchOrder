import { configureStore } from '@reduxjs/toolkit'
import menuSlice from "./slice/menu";

const store = configureStore({
    reducer:{
        menu: menuSlice.reducer,
    },
    // middleware: getDefaultMiddleware => {
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     })
    // }
});
export const menuActions = menuSlice.actions;
export default store;