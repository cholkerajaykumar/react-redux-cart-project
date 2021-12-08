import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isShown: false,
};

const cartButtonSlice = createSlice({
  name: "cartButton",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const cartButtonAction = cartButtonSlice.actions;

export default cartButtonSlice.reducer;
