import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../service/auth.service';

const initialState = {
  loading: false,
  isRecovered: false,
  userProfile: null,
  error: '',
};

// Async thunk for handling user profile retrieval
export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (userToken, thunkAPI) => {
    try {
      const response = await AuthService.fetchUserProfile(userToken);
      const userProfile = response.body;
      return userProfile;
    } catch (error) {
      console.error('Error during fetchUserProfile:', error);
      return thunkAPI.rejectWithValue();
    }
  }
);

// Creating the userProfile slice using createSlice from Redux Toolkit
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isRecovered = true;
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isRecovered = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = userProfileSlice;
export default reducer;
