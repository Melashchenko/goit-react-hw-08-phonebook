import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ContactEl } from 'components/ContactEl/ContactEl';
import { fetchContacts } from 'redux/contacts/operations';
import { Box } from 'components/Box';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading !== true && filterContacts.length === 0) {
    return (
      <Box as="p" p={10}>
        No contacts saved
      </Box>
    );
  }

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 &&
        filterContacts.map(contact => (
          <ContactEl contact={contact} key={contact.id} />
        ))}
    </div>
  );
};
