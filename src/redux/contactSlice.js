import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    add(state, action) {
      state.contacts.splice(0, 0, action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { add, remove } = contactSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

// Selectors

export const getContactsState = state => state.contactsState.contacts;
