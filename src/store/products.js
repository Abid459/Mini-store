import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice  = createSlice({
    name:'products',
    initialState: [],
    reducers:{
        productsAdded : (products,action) =>{
            products.push({
                id : ++lastId,
                description:action.payload.description
            })
        },
        productsRemoved : (products,action) =>{

        }
    }
})

export const {productsAdded,productsRemoved} = slice.actions;
export default slice.reducer;

// export default products;