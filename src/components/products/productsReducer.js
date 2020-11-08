import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../pages/mainpage/services/fakeProductsService";

const slice = createSlice({
  name: "products",
  initialState: {
    lists: [],
  },
  reducers: {
    // action => action handler
    productsRequested: (products, action) => {
      products.lists = getProducts();
    },
    productsDeleted: (products, action) => {
      products.lists = products.lists.filter(
        (p) => p._id !== action.payload.item._id
      );
    },
  },
});

export const { productsRequested, productsDeleted } = slice.actions;
export default slice.reducer;
