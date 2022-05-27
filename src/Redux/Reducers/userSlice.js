import { createSlice } from "@reduxjs/toolkit";

const UserInfo = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: UserInfo,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      state.user = payload; //update the User state
    },
    Logout: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { signIn, Logout } = userSlice.actions;
export default userSlice.reducer;
export const userAuth = (state) => state.userAuth.user;
