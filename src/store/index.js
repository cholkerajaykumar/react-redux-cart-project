import { configureStore } from "@reduxjs/toolkit";

import cartButtonReducer from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: cartButtonReducer, cart: cartSlice.reducer },
});

export default store;
