import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    logout: (state) => {
      return initialState;
    },
    following: (state, action) => {
      if (state.currentUser.user.following.includes(action.payload)) {
        state.currentUser.user.following.splice(
          state.currentUser.user.following.findIndex(
            (followingId) => followingId === action.payload
          )
        );
      } else {
        state.currentUser.user.following.push(action.payload);
      }
    },
  },
});

export const { loginFailed, loginStart, loginSuccess, logout, following } =
  userSlice.actions;

export default userSlice.reducer;
