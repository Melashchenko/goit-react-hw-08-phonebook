import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    add(state, action) {
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    getFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { add, remove, getFilter } = contactSlice.actions;

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
export const getFilterState = state => state.contactsState.filter;
