import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice  = createSlice({
    name:'products',
    initialState:{
        allProducts :[],
        cartProducts:[]
    },
    reducers:{
        allProductsAdded: (products,action) =>{
          products.allProducts = action.payload
          console.log("this is action",action.payload)
        },
        productsAddedtoCart : (products,action) =>{
            products.cartProducts.push({
                id : ++lastId,
                description:action.payload.description
            })
        },
        productsRemoved : (products,action) =>{

        }
    }
})

export const {productsAddedtoCart,productsRemoved,allProductsAdded} = slice.actions;
export default slice.reducer;

// export default products;