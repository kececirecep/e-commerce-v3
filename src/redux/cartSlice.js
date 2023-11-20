import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeItemFromCart(state, action) {
            const itemIdToRemove = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === itemIdToRemove);

            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        },
        updateCartItemQuantity(state, action) {
            const { id, quantity  } = action.payload;

            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity = quantity;
            }
        }
    }
})

export const { addItemToCart, removeItemFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;