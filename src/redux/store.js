import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';

import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contactsState: contactReducer,
    filtersState: filterReducer,
    auth: authReducer,
  },
});
