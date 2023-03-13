export const selectContacts = state => state.contactsState.contacts.items;
export const selectIsLoading = state => state.contactsState.contacts.isLoading;
export const selectError = state => state.contactsState.contacts.error;

export const selectFilter = state => state.filtersState.filter;
