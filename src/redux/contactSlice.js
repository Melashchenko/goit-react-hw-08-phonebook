import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    add(state, action) {
      state.contacts.items.splice(0, 0, action.payload);
    },
    remove(state, action) {
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
});

export const { add, remove } = contactSlice.actions;

// Selectors

export const getContactsState = state => state.contactsState.contacts.items;
