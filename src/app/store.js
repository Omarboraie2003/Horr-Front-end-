import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    _placeholder: (state = {}) => state,
  },
});

export default store;
