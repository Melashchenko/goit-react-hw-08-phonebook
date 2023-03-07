import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const clickSlice = createSlice({
  name: 'click',
  initialState: { value: 0 },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedClicksReducer = persistReducer(
  persistConfig,
  clickSlice.reducer
);

export const { update } = clickSlice.actions;

// Srlectors

export const getClickValue = state => state.clicks.value;
