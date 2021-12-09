import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isShown: false,
  notification: null,
};

const cartButtonSlice = createSlice({
  name: "cartButton",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartButtonAction = cartButtonSlice.actions;

export default cartButtonSlice.reducer;
