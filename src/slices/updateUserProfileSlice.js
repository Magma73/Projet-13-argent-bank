import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../service/auth.service';

const initialState = {
  loading: false,
  isUpdated: false,
  error: '',
};

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

const updateUserProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        // Update the state when the request is in progress
        state.loading = true;
        state.isUpdated = false;
        state.error = '';
      })
      .addCase(updateUserProfile.fulfilled, (state) => {
        // Update the state when the request is successful
        state.loading = false;
        state.isUpdated = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        // Update the state when the request fails
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { reducer } = updateUserProfileSlice;
export default reducer;
