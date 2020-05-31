import { configureStore } from "@reduxjs/toolkit";
import reducer from "./productsReducer.js";

export default function () {
  const store = configureStore({ reducer });
  return store;
}
