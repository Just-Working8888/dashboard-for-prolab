import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './Prifile/ProfileSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;