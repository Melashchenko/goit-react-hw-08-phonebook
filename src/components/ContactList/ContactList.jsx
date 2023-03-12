import { useSelector, useDispatch } from 'react-redux';
import { getContactsState } from 'redux/contactSlice';
import { getFilterState } from 'redux/filterSlice';

import { ContactEl } from 'components/ContactEl/ContactEl';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Box } from 'components/Box';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContactsState);
  const filter = useSelector(getFilterState);
  const dispatch = useDispatch();

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 &&
        filterContacts.map(contact => (
          <ContactEl contact={contact} key={contact.id} />
        ))}
      {items.length <= 0 && (
        <Box as="h2" p={10}>
          No contacts saved
        </Box>
      )}
    </div>
  );
};
