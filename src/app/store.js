// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { loginSlice } from '../pages/Login/loginSlice';

// let state = {
//   email: {},
//   password: {},
//   firstname: {},
//   lastname: {},
// };

// export const store = configureStore({
//   preloadedState: state,
//   reducer: combineReducers({
//     login: loginSlice.reducer,
//   }),
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';
import messageReducer from '../slices/message';
import userProfileReducer from '../slices/userProfileSlice';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  userProfile: userProfileReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

// import { configureStore } from "@reduxjs/toolkit"

// // redux slice
// import firstNameReducer from "./features/firstName"
// import lastNameReducer from "./features/lastName"
// import tokenReducer from "./features/token"

// /* configureStore :  create the Redux store
// store : assemble state, action and reducer */
// export const store = configureStore({
//     reducer: {
//         firstName: firstNameReducer,
//         lastName: lastNameReducer,
//         token: tokenReducer
//     },
// })
