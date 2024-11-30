import {createSlice} from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const payload = action.payload;
            let num = state.findIndex((obj) =>{
                return obj.id === payload.id;
            })
            if (num === -1) {
                state.push(payload);
            }else{
                state[num].cnt += payload.cnt;
            }
        },
        increase: (state, action) => {
            const payload = action.payload;
            let num = state.findIndex((obj) =>{
                return obj.id === payload.id;
            })
            state[num].cnt += 1;
        },
        decrease: (state, action) => {
            const payload = action.payload;
            let num = state.findIndex((obj) =>{
                return obj.id === payload.id;
            })
            state[num].cnt -= 1;
        },
        remove: (state, action) => {
            const payload = action.payload;
            let num = state.findIndex((obj) =>{
                return obj.id === payload.id;
            })
            state.splice(num, 1)
        }
    },
});


export const { add, increase, decrease, remove } = cartSlice.actions;

export default cartSlice;