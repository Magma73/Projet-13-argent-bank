import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import AuthService from '../service/auth.service';

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: null,
  error: '',
};

// Async thunk for handling user login
export const login = createAsyncThunk('auth/login', async ({ username, password }, thunkAPI) => {
  try {
    const data = await AuthService.login(username, password);
    return { user: data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

// Async thunk for handling user logout
export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

// Creating the auth slice using createSlice from Redux Toolkit
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

const { reducer } = authSlice;
export default reducer;
