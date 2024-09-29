import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemsToAdd = action.payload;
      console.log("items to add to cart", itemsToAdd);

      const newArray = [];

      itemsToAdd.forEach((newItem) => {
        const {
          orderType,
          quantity,
          _id: id,
          sizes,
          color,
          price,
          createdAt,
          productID,
          selectedImage,
        } = newItem;

        // const existingItem = state.items.find((item) => item.id === id);

        // if (existingItem) {
        //   // If the item exists, update the quantity and total price
        //   existingItem.quantity += quantity;
        //   existingItem.totalPrice += price * quantity;
        // } else {
        // Add the new item to the cart without overwriting the entire array
        newArray.push({
          orderType,
          quantity,
          id,
          sizes,
          color,
          price,
          createdAt,
          selectedImage,
          productID,
          totalPrice: price * quantity,
        });
        //}
      });

      state.items = newArray;

      // Recalculate the total amount after adding/updating items
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;

      // Filter the items to remove the one with the matching id
      const filteredItems = state.items.filter((item) => item.id !== itemId);
      console.log(state.items.map((item) => item));

      // Update state.items with the filtered result
      state.items = filteredItems;

      // Recalculate the totalAmount based on the updated items list
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    setCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
