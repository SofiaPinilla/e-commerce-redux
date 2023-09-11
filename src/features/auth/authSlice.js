import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const token = JSON.parse(localStorage.getItem("token")) || null;
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,
  token: token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.token = null;
        state.user = null;
      });
  },
});

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    return await authService.register(user);
  } catch (error) {
    console.error(error);
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export default authSlice.reducer;
