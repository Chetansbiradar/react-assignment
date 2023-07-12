import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        // store using hashmap
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index].quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index].quantity -= 1;
                if (state.items[index].quantity === 0) {
                    state.items.splice(index, 1);
                }
            }
        },
        emptyCart: (state) => {
            state.items = [];
        },
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;