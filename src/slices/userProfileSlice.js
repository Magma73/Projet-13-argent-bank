import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../services/auth.service';

const initialState = {
  isRecovered: false,
  error: '',
  userProfile: null,
};

export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (userToken, thunkAPI) => {
    try {
      const response = await AuthService.fetchUserProfile(userToken);
      console.log('réponse dans userProfileSlice: ', response);
      const userProfile = response.body;
      return userProfile;
    } catch (error) {
      console.error('Erreur lors de la récupération du profil utilisateur :', error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isRecovered = true;
        // console.log(action)
        state.userProfile = action.payload;
        // console.log(action.payload);
        // return action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.isRecovered = false;
        // state.userProfile = null;
      });
  },
});

// export const { reducer: userProfileReducer } = userProfileSlice;

const { reducer } = userProfileSlice;
export default reducer;
