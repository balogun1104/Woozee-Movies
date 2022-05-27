import { createSlice } from "@reduxjs/toolkit";

const initialState = { toggle: false };

export const ToggleSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    ChangeToggle: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { ChangeToggle } = ToggleSlice.actions;

export default ToggleSlice.reducer;
