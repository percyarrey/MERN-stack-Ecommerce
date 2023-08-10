import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartList:[]
}

export const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartData:(state,action)=>{
            state.cartList = [...action.payload]
        },
        changeCartData:(state,action)=>{
            state.cartList = [...action.payload]
        }

    }
})

export const {addCartData,changeCartData} = cartSlice.actions
export default cartSlice.reducer 