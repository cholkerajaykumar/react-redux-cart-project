import { configureStore } from "@reduxjs/toolkit";

import cartButtonReducer from "./ui-slice";

const store = configureStore({
  reducer: { ui: cartButtonReducer },
});

export default store;
