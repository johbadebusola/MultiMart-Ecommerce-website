import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    subtotal: 0,
    cartAmount: 0,
    totalItem:0
}

export const filterSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateCart: (state, actions) => {

            const itemIndex = state.cartItems.findIndex((items) => items.id === actions.payload.id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartCount += 1
                state.cartItems[itemIndex].cartAmount += 1
            } else {
                const newCart = { ...actions.payload, cartCount: 1, cartAmount:1
                 }
                state.cartItems.push(newCart)
            }

        },
        subTotal: (state, actions) => {

            state.subtotal = actions.payload

        },
        totalItem:(state,actions) => {
    state.totalItem = actions.payload
        },
        deleteItems: (state, actions) => {

            state.cartItems =  state.cartItems.filter((items) => items.id !== actions.payload.id)


        },
        updateCartAmount: (state, actions) => {
            state.cartAmount += actions.payload
        },
        deductOnDelete: (state, actions) => {
            state.cartAmount -= actions.payload
        }



    }


})

export const { updateCart, subTotal, deleteItems, updateCartAmount, deductOnDelete,totalItem } = filterSlice.actions
export default filterSlice.reducer