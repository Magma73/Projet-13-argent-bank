import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../service/auth.service';

const initialState = {
  loading: false,
  isUpdated: false,
  error: '',
};

// Create an async thunk for updating the user profile
export const updateUserProfile = createAsyncThunk(
  'userProfile/updateUserProfile',
  async ({ userToken, firstName, lastName }, thunkAPI) => {
    try {
      // Call the profile update function from the service
      const updatedProfile = await AuthService.updateUserProfile(userToken, firstName, lastName);

      // Return the updated profile to be stored in the state
      return updatedProfile;
    } catch (error) {
      // If an error occurs, reject the error for the state to handle errors
      return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Create a slice for the user profile, including reducers and extra reducers for async actions
const updateUserProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.isUpdated = false;
        state.error = '';
      })
      .addCase(updateUserProfile.fulfilled, (state) => {
        state.loading = false;
        state.isUpdated = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { reducer } = updateUserProfileSlice;
export default reducer;
