import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';
import messageReducer from '../slices/message';
import userProfileReducer from '../slices/userProfileSlice';
import updateUserProfileReducer from '../slices/updateUserProfileSlice';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  userProfile: userProfileReducer,
  updateUserProfile: updateUserProfileReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
