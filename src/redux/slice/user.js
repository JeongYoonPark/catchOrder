import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {name:"", loggedIn:true, number:0},
    reducers: {
        login: (state, action) => {
            const payload = action.payload;
            state.loggedIn = true;
            state.name= payload.name;
            state.number = payload.number;
        },
        logout: (state) => {
            state.loggedIn = false;
        }
    },
});


export const { login, logout } = userSlice.actions;

export const loggedIn = (state) => state.user.loggedIn;
export const email = (state) => state.user.email;
export const name = (state) => state.user.name;

export default userSlice;