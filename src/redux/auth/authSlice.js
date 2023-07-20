import { createSlice } from '@reduxjs/toolkit';
import { register, LogIn, LogOut } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      // console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },

    [LogIn.fulfilled](state, action) {
      // console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },

    [LogOut.fulfilled](state, action) {
      state.user = { name: null, emai: null };
      state.token = null;
      state.isLogedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
