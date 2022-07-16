import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice  = createSlice({
    name:'products',
    initialState:{
        allProducts :[],
        cartProducts:[],
        cartProductsId:[]

    },
    reducers:{
        allProductsAdded: (products,action) =>{
          products.allProducts = action.payload
        },
        productsAddedtoCart : (products,action) =>{
            const existProductIndex = products.cartProductsId.indexOf(action.payload.id)
            if(existProductIndex === -1){
                products.cartProductsId.push(action.payload.id)
                const newProduct = {...action.payload,quantity:1};
                products.cartProducts.push(newProduct)
            } else{
                products.cartProducts[existProductIndex].quantity ++;
            }
        },
        productQuantityIncrement :(products,action)=>{
            const existProductIndex = products.cartProductsId.indexOf(action.payload)
            products.cartProducts[existProductIndex].quantity ++;
        },
        productQuantityDecrement :(products,action)=>{
            const existProductIndex = products.cartProductsId.indexOf(action.payload)
            products.cartProducts[existProductIndex].quantity >0 && products.cartProducts[existProductIndex].quantity --;
        },
        productsRemoved : (products,action) =>{
            products.cartProducts = products.cartProducts.filter(product=>product.id !== action.payload)
            products.cartProductsId = products.cartProductsId.filter(id=>id !== action.payload)
        }
    }
})

export const {productsAddedtoCart,productsRemoved,allProductsAdded,productQuantityIncrement,productQuantityDecrement} = slice.actions;
export default slice.reducer;

// export default products;