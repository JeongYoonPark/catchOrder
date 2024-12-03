import {createSlice} from '@reduxjs/toolkit';


export const menuSlice = createSlice({
    name: 'menu',
    initialState: [],
    reducers: {
        setList: (state, action) => {
            const payload = action.payload;
            state = [];
            for(const data of payload){

                state.push(data);
            }


        },
        checked: (state, action) => {
            const payload = action.payload;

            let num = state.findIndex((obj) =>{
                return obj.id === payload.id;
            })
            if (num === -1) {
                state.push(payload);
            }else{
                state[num].cnt += payload.cnt;
            }
        }

    },
});


export const { setList, increase, checked } = menuSlice.actions;

export default menuSlice;