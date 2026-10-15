// CartSlice.jsx
// Redux Toolkit slice that manages the shopping cart state for Paradise Nursery.
// Handles adding items, removing items, and updating the quantity of an item.
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    // Each item: { name, image, cost, quantity }
    items: [],
  },
  reducers: {
    // Add a plant to the cart. If it already exists, increment its quantity.
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove a plant entirely from the cart, identified by its name.
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    // Update the quantity of a specific plant in the cart.
    // Expects a payload of { name, quantity }.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators for use in components.
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be registered in the store.
export default CartSlice.reducer;
