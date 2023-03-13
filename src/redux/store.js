import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contactsState: contactReducer,
    filtersState: filterReducer,
  },
});
